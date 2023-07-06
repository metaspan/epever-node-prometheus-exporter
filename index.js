import express from 'express';
import ModbusRTU  from 'modbus-serial';
import { registers } from './codes.js'

const config = {
  ttyDevice: '/dev/ttyACM0',
  baudrate: 115200,
  prefix: 'epever'
}

// create an empty modbus client
const client = new ModbusRTU();
client.setTimeout(500);

// open connection to a serial port
client.connectRTUBuffered(config.ttyDevice, {
  // parity: 'none',
  // stopBits: 1,
  baudRate: config.baudrate
}); // FIXME ?? writer?

const app = express()
const port = 3000

// async function getSettings () {
//   const settings = []
//   try {
//     const vals = await client.readInputRegisters(0x3000,1);
//     console.debug(vals)
//   } catch (err) {
//     console.error(err)
//   }
//   return settings
// }

app.get('/', (req, res) => {
  res.send('Hello from epever prom exporter!')
})

// app.get('/settings', async (req, res) => {
//   let settings = await getSettings()
//   res.json(settings)
// })

const findRegister = (address) => {
  for (const key in registers) {
    if (registers[key][address]) {
      // return registers[key][register];
      return key
    }
  }
  return null;
}

function toHex(address) {
  return `0x${parseInt(address).toString(16)}`
}

function toNumber(value) {
  if (typeof value === 'boolean') {
    return value ? 1 : 0;
  }
  // If value is a number (int or float), return as it is
  if (typeof value === 'number') {
    return value;
  }
  // If value is a string, attempt to parse it as a number
  if (typeof value === 'string') {
    const num = Number(value);
    // If the string could be converted to a number, return the number
    if (!isNaN(num)) {
      return num;
    }
  }
  return -999;
}

const readRegister = async (register, address) => {
  var v;
  // try {
    switch (register) {
      case '1':
        v = await client.readCoils(address, 1)
        break;
      case '2':
        v = await client.readDiscreteInputs(address, 1)
        break;
      case '3':
        v = await client.readHoldingRegisters(address, 1)
        break;
      case '4':
        v = await client.readInputRegisters(address, 1)
        break;
      default:
        console.log(register, 'NOT YET IMPLEMENTED');
    }
  // } catch (err) {
  //   throw(err)
  // }
  return v;
}

// types: GUAGE up/down, COUNTER up, HISTOGRAM, SUMMARY
function formatOutput(register, address, value, spec) {
  let items = []
  items.push(`# HELP ${config.prefix}_${spec.number} ${spec.name}`)
  items.push(`# TYPE ${config.prefix}_${spec.number} gauge`)
  if(spec.description && spec.description !== '') items.push(`# ${spec.description}`)
  var v = toNumber(value.data[0])
  items.push(`${config.prefix}_${spec.number}{register="${register}", address="${toHex(address)}", unit="${spec.unit}", times="${spec.times}"} ${v}`)
  return items
}

async function getData() {
  const lines = []
  for (const [register, addresses] of Object.entries(registers)) {
    console.log(`${register}: ${Object.keys(addresses)}`);
    //ret.push(register)
    for(const [address, spec] of Object.entries(addresses)) {
      try {
        var v = await readRegister(register, address)
        lines.push(...formatOutput(register, address, v, spec))
      } catch (err) {
        // ret.push({ register, address, err })
        console.error(register, address, toHex(address), err)
        lines.push('#')
        lines.push(`# register: ${register}, address: ${toHex(address)} NOT SUPPORTED BY DEVICE`)
        lines.push('#')
      }
    }
  }
  return lines.join("\n")
}

var active = false
var cache = '' // formatted text for prometheus
app.get('/metrics', async (req, res) => {
  if (active) {
    console.debug('scrape active, returning cache')
    res.set("Content-Type","text/plain; version=0.0.4")
    res.send(cache)
    return
  }
  try {
    active = true
    let data = await getData()
    cache = data
    res.set("Content-Type","text/plain; version=0.0.4")
    res.send(data)
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  } finally {
    active = false
  }
})

const computeValue = (value, spec) => {
  if (['true', 'false'].includes(value)) {
    return value === 'true'
  }
  try {
    const fVal = parseFloat(value)
    const times = spec.times || 1
    return fVal * times
  } catch (err) {
    return value
  }
}

// we can't use the cache (it's for prometheus)
app.get('/json/:address', async (req, res) => {
  const address = req.params.address
  console.log(`/json/:address`, address)
  const ret = {}
  if (address) {
    const iadd = parseInt(address)
    const register = findRegister(iadd)
    if (register) {
      const spec = registers[register][iadd]
      try {
        const v = await readRegister(register, iadd)
        ret[`${toHex(address)}`] = {
          register: toHex(register), spec, value: v.data[0], computed_value: computeValue(v.data[0], spec)
        }
      } catch (error) {
        ret[`${toHex(address)}`] = {
          register, address, spec, error, computed_value: null
        }
      }
    } else {
      res.json({ error: `Invalid address ${address}` })
    }
  } else {
    res.json({ error: `Invalid address ${address}` })
  }
  res.json(ret)
})

app.get('/json', async (req, res) => {
  var ret = {}
  for (const [register, addresses] of Object.entries(registers)) {
    console.log(`${register}: ${Object.keys(addresses)}`);
    // ret.push(register)
    for(const [address, spec] of Object.entries(addresses)) {
      try {
        var v = await readRegister(register, address)
        ret[`${toHex(address)}`] = {
          register: toHex(register), spec, value: v.data[0]
        }
      } catch (error) {
        // ret.push({ register, address, err })
        ret[`${toHex(address)}`] = {
          register, address, spec, error
        }
      }
    }
  }
  res.json(ret)
})

app.get('/test', async (req, res) => {
  // res.json(registers)
  var ret = []
  for (const [register, addresses] of Object.entries(registers)) {
    console.log(`${register}: ${Object.keys(addresses)}`);
    ret.push(register)
    for(const [address, spec] of Object.entries(addresses)) {
      try {
        var v = readRegister(register, address)
        ret.push({ register, address, spec, v })
      } catch (err) {
        ret.push({ register, address, err })
      }
    }
  }
  res.json(ret)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
