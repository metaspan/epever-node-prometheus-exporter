// source: ControllerProtocolV2.3.pdf

export const reg_rw = {
  // Read Coils (0x01) and Write Single Coil(0x05)
  0x01: { read: true, write: true, writeTo: 0x05 },
  // Read Discrete Inputs (0x02)
  0x02: { read: true, write: false },
  // Read Holding Register (0x03) and Write Multiple Holding Register (0x10)
  0x03: { read: true, write: true, writeTo: 0x10 },
  // Read Input Register(0x04)
  0x04: { read: true, write: false },
}

export const registers = {
  
  // Read Coils (0x01)
  // Write Single Coil(0x05)
  0x01: {
    0x0: { number: 'H1', name: 'Charging device on/off', description: '', values: {
      '1': 'Charging device on',
      '0': 'Charging device off'
    } },
    0x1: { number: 'H2', name: 'Output control mode manual/automatic', description: '', values: {
      '1': 'Output control mode manual',
      '0': 'Output control mode automatic'
    } },
    0x2: { number: 'H3', name: 'Manual control the load', description: '', values: {
      '1': 'manual on',
      '0': 'manual off'
    } },
    0x3: { number: 'H4', name: 'Default control the load', description: '', values: {
      '1': 'manual on',
      '0': 'manual off'
    } },
    0x5: { number: 'H6', name: 'Enable load test mode', description: '', values: {
      '1': 'Enable',
      '0':' Disable(normal)'
    } },
    0x6: { number: 'H7', name: 'Force the load on/off', description: '', values: {
      '1': 'Turn on',
      '0': 'Turn off (used for temporary test of the load'
    } },
    0x13: { number: 'H20', name: 'Restore system defaults', description: '', values: {
      '1': 'yes',
      '0': 'no'
    } },
    0x14: { number: 'H21', name: 'Clear generating electricity statistics', description: '', values: {
      '1': 'clear. Root privileges to perform'
    } },
  },

  // Read Discrete Inputs (0x02)
  // Discrete Value (Read Only)
  0x02: {
    0x2000: { number: 'I1', name: 'Over temperature inside the device', description: '', values: {
      '1': 'The temperature inside the controller is higher than the over-temperature protection point.',
      '0': 'Normal'
    } },
    0x200C: { number: 'I12', name: 'Day/Night', description: '', values: {
      '1': 'Night',
      '0': 'Day'
    } },
  },

  // Read Holding Register (0x03)
  // Write Multiple Holding Register (0x10)
  0x03: {
    0x9000: { number: 'E1', name: 'Battery Type', unit: '', times: 1, description: '', values: {
      '0001H': 'Sealed',
      '0002H': 'GEL',
      '0003H': 'Flooded',
      '0000H': 'User defined',
    } },
    0x9001: { number: 'E2', name: 'Battery Capacity', unit: 'AH', times: 1, description: 'Rated capacity of the battery' },
    0x9002: { number: 'E3', name: 'Temperature compensation coefficient', unit: 'mV/°C/2V', times: 100, description: 'Range 0-9' },
    0x9003: { number: 'E4', name: 'High Volt. disconnect', unit: 'V', times: 100, description: '' },
    0x9004: { number: 'E5', name: 'Charging limit voltage', unit: 'V', times: 100, description: '' },
    0x9005: { number: 'E6', name: 'Over voltage reconnect', unit: 'V', times: 100, description: '' },
    0x9006: { number: 'E7', name: 'Equalization voltage', unit: 'V', times: 100, description: '' },
    0x9007: { number: 'E8', name: 'Boost voltage', unit: 'V', times: 100, description: '' },
    0x9008: { number: 'E9', name: 'Float voltage', unit: 'V', times: 100, description: '' },
    0x9009: { number: 'E10', name: 'Boost reconnect voltage', unit: 'V', times: 100, description: '' },
    0x900A: { number: 'E11', name: 'Low voltage reconnect', unit: 'V', times: 100, description: '' },
    0x900B: { number: 'E12', name: 'Under voltage recover', unit: 'V', times: 100, description: '' },
    0x900C: { number: 'E13', name: 'Under voltage warning', unit: 'V', times: 100, description: '' },
    0x900D: { number: 'E14', name: 'Low voltage disconnect', unit: 'V', times: 100, description: '' },
    0x900E: { number: 'E15', name: 'Discharging limit voltage', unit: 'V', times: 100, description: '' },
    0x9013: { number: 'E20', name: 'Real time clock', unit: '', times: 1, description: '' },
      // D7-0 Sec, 
      // D15-8 Min.(Year, Month, Day, Min, Sec. should be written simultaneously)
    0x9014: { number: 'E21', name: 'Real time clock', unit: '', times: 1, description: '' },
      // D7-0 Hour, D15-8 Day
    0x9015: { number: 'E22', name: 'Real time clock', unit: '', times: 1, description: '' },
      // D7-0 Month, D15-8 Year
    0x9017: { number: 'E24', name: 'Battery temperature warning upper limit', unit: '°C', times: 100, description: '' },
    
    0x9018: { number: 'E25', name: 'Battery temperature warning lower limit', unit: '', times: 100, description: '' },
    0x9019: { number: 'E26', name: 'Controller inner temperature upper limit', unit: '', times: 100, description: '' },
    0x901A: { number: 'E27', name: 'Controller inner temperature upper limit recover', unit: '', times: 100, description: '' },
    0x901E: { number: 'E31', name: 'Day TimeThreshold Volt.(DTTV)', unit: '', times: 100, description: '' },
    0x901F: { number: 'E32', name: 'Light signal startup (night) delay time', unit: '', times: 100, description: '' },
    0x9020: { number: 'E33', name: 'Light Time Threshold Volt.(NTTV)', unit: '', times: 100, description: '' },
    0x9021: { number: 'E34', name: 'Light signal close (day) delay time', unit: '', times: 100, description: '' },
    0x903D: { number: 'E62', name: 'Load controlling modes', unit: '', times: 100, description: '' },
    0x903E: { number: 'E63', name: 'Working time length 1', unit: '', times: 100, description: '' },
    0x903F: { number: 'E64', name: 'Working time length 2', unit: '', times: 100, description: '' },
    0x9042: { number: 'E67', name: 'Turn on timing 1', unit: 'Sed', times: 100, description: 'Turn on/off timing of load output.' },
    0x9043: { number: 'E68', name: '', unit: 'Min', times: 100, description: 'Turn on/off timing of load output.' },
    0x9044: { number: 'E69', name: '', unit: 'Hour', times: 100, description: 'Turn on/off timing of load output.' },
    0x9045: { number: 'E70', name: 'Turn off timing 1', unit: 'Sec', times: 100, description: 'Turn on/off timing of load output.' },
    0x9046: { number: 'E71', name: '', unit: 'Min', times: 100, description: 'Turn on/off timing of load output.' },
    0x9047: { number: 'E72', name: '', unit: 'Hour', times: 100, description: 'Turn on/off timing of load output.' },
    0x9048: { number: 'E73', name: 'Turn on timing 2', unit: 'Sec', times: 100, description: 'Turn on/off timing of load output.' },
    0x9049: { number: 'E74', name: '', unit: 'Min', times: 100, description: 'Turn on/off timing of load output.' },
    0x904A: { number: 'E75', name: '', unit: 'Hour', times: 100, description: 'Turn on/off timing of load output.' },
    0x904B: { number: 'E76', name: 'Turn off timing 2', unit: 'Sec', times: 100, description: 'Turn on/off timing of load output.' },
    0x904C: { number: 'E77', name: '', unit: 'Min', times: 100, description: 'Turn on/off timing of load output.' },
    0x904D: { number: 'E78', name: '', unit: 'Hour', times: 100, description: 'Turn on/off timing of load output.' },
    0x9063: { number: 'E100', name: 'Backlight time', unit: 'S', times: 100, description: '' },
    
    0x9065: { number: 'E102', name: 'Length of night', unit: 'S', times: 100, 
      description: 'Set default values of the whole night length of time. D15-D8,hour, D7-D0, minute' },
    0x9066: { number: 'E103', name: 'Device configure of main power supply', unit: 'S', times: 100, 
      description: '',
      values: {
        '0001H': 'Battery is main',
        '0002H': 'AC-DC power mainly'
      }
    },
    0x9067: { number: 'E104', name: 'Battery rated voltage code', unit: '', times: 100, description: '', values: {
      0: 'auto recognize.', 1: '12V',
      2: '24V', 3: '36V', 4: '48V', 5: '60V',
      6: '110V', 7: '120V', 8:'220V', 9: '240V'
    } },
    0x906A: { number: 'E107', name: 'Default Load On/Off in manual mode', unit: '', times: 100, description: '', values: {
      0: 'off', 1: 'on'
    } },
    0x906B: { number: 'E109', name: 'Equalize duration', unit: 'Min', times: 100, description: 'Usually 0-120 minutes' },
    0x906C: { number: 'E100', name: 'Boost duration', unit: 'Min', times: 100, description: 'Usually 10-120 minutes' },
    0x906D: { number: 'E110', name: 'Discharging percentage', unit: '%', times: 100,
      description: 'Usually 20%-80%. The percentage of battery\'s remaining capacity when stop charging' },
    0x906E: { number: 'E111', name: 'Charging percentage', unit: '%', times: 100, description: 'Depth of charge, 100%' },
    0x9070: { number: 'E113', name: 'Management modes of battery charging and discharging', unit: '', times: 100, description: '', values: {
      // Management modes of battery charge and discharge, 
      0: 'voltage compensation',
      1: 'SOC',
    } },
  },

  // Read Input Register(0x04)
  0x04: { // 0x04
    // Rated Datum (Read Only)
    0x3000: { number: '_0', name: 'array rated voltage',   unit: 'V', times: 100, description: 'PV array rated voltage' },
    0x3001: { number: '_1', name: 'array rated current',   unit: 'A', times: 100, description: 'PV array rated current' },
    0x3002: { number: '_2', name: 'array rated power L',   unit: 'W', times: 100, description: 'PV array rated power (low 16 bits)' },
    0x3003: { number: '_3', name: 'array rated power H',   unit: 'W', times: 100, description: 'PV array rated power (high 16 bits)' },
    0x3004: { number: '_4', name: 'Battery rated voltage', unit: 'V', times: 100, description: 'Rated voltage to battery' },
    0x3005: { number: '_5', name: 'Battery rated current', unit: 'A', times: 100, description: 'Rated current to battery' },
    0x3006: { number: '_6', name: 'Battery rated power L', unit: 'W', times: 100, description: 'Rated power to battery L' },
    0x3007: { number: '_7', name: 'Battery rated power H', unit: 'W', times: 100, description: 'Rated power to battery H' },
    0x3008: { number: '_8', name: 'Charging mode',         unit: '',  times: 1, description: '0000H Connect/disconnect, 0001H PWM,0002H MPPT' },
    0x300E: { number: '_E', name: 'Rated current of load', unit: 'W', times: 100, description: 'Rated current of load' },
    // Real-time Datum (Read Only)
    0x3100: { number: 'B1',  name: 'PV array input voltage', unit: 'V', times: 100, description: '' },
    0x3101: { number: 'B2',  name: 'PV array input current', unit: 'A', times: 100, description: '' },
    0x3102: { number: 'B3',  name: 'PV array input power L', unit: 'W', times: 100, description: '' },
    0x3103: { number: 'B4',  name: 'PV array input power H', unit: 'W', times: 100, description: '' },
    0x3106: { number: 'B7',  name: 'Battery power L', unit: 'W', times: 100, description: '' },
    0x3107: { number: 'B8',  name: 'Battery power H', unit: 'W', times: 100, description: '' },
    0x310C: { number: 'B13', name: 'Load voltage', unit: 'V', times: 100, description: '' },
    0x310D: { number: 'B14', name: 'Load current', unit: 'A', times: 100, description: '' },
    0x310E: { number: 'B15', name: 'Load power L', unit: 'W', times: 100, description: '' },
    0x310F: { number: 'B16', name: 'Load power H', unit: 'W', times: 100, description: '' },
    0x3110: { number: 'B17', name: 'Battery Temperature', unit: '°C', times: 100, description: '' },
    0x3111: { number: 'B18', name: 'Temperature inside equipment', unit: '°C', times: 100, description: '' },
    0x311A: { number: 'B27', name: 'Battery SOC', unit: '%', times: 100, description: '' },
    0x311B: { number: 'B28', name: 'Remote battery temperature', unit: '°C', times: 100, description: '' },
    0x311D: { number: 'B30', name: 'Battery\'s real rated power', unit: '°C', times: 100, description: '' },
    // Real-time Status (Read Only)
    0x3200: { number: 'C1', name: 'Battery status', unit: '', times: 1, description: '', values: {
      'D3-D0': {
        '01H': 'Overvolt',
        '00H': 'Normal',
        '02H': 'Under Volt',
        '03H': 'Low Volt Disconnect',
        '04H': 'Fault'
      },
      'D7-D4': {
        '00H': 'Normal', 
        '01H': 'Over Temp.(Higher than the warning settings)',
        '02H': 'Low Temp.(Lower than the warning settings)',
      },
      'D8': { // 'Battery inner resistance
        '1': 'abnormal',
        '0': 'normal',
      },
      'D15': {
        1: 'Wrong identification for rated voltage'
      }
    } },
    0x3201: { number: 'C2', name: 'Charging equipment status', unit: '', times: 1, description: '', values: {
      'D15-D14': { //Input volt status. 
        '00': 'normal',
        '01': 'no power connected',
        '02H': 'Higher volt input',
        '03H': 'Input volt error.',
        'D13': 'Charging MOSFET is short.',
        'D12': 'Charging or Anti-reverse MOSFET is short.',
        'D11': 'Anti-reverse MOSFET is short.',
        'D10': 'Input is over current.',
        'D9': 'The load is Over current.',
        'D8': 'The load is short.',
        'D7': 'Load MOSFET is short.',
        'D4': 'PV Input is short.',
      },
      'D3-2': { //Charging status.
        '00': 'No charging',
        '01': 'Float',
        '02': 'Boost',
        '03': 'Equalization.',
      },
      'D1': {
        '0': 'Normal',
        '1': 'Fault.',
      },
      'D0': {
        '1': 'Running',
        '0': 'Standby.',
      }
    } },
    0x3202: { number: 'C7', name: 'Discharging equipment status', unit: '', times: 1, description: '', values: {
      'D15-D14': {
        '00H': 'normal', '01H': 'low',
        '02H': 'High',
        '03H': 'no access Input volt error.'
      },
      'D13-D12': { // output power:
        '00': 'light load',
        '01': 'moderate',
        '02': 'rated',
        '03': 'overload',
      },
      'D11': 'short circuit',
      'D10': 'unable to discharge',
      'D9': 'unable to stop discharging',
      'D8': 'output voltage abnormal',
      'D7': 'input overpressure',
      'D6': 'high voltage side short circuit',
      'D5': 'boost overpressure',
      'D4': 'output overpressure',
      'D1': {
        0: 'Normal', 1: 'Fault.'
      },
      'D0': {
        1: 'Running', 0: 'Standby.'
      }
    } },

    // Statistical Parameters (Read Only)
    0x3300: { number: 'D0', name: 'Maximum PV voltage today', unit: 'V', times: 100, description: '' },
    0x3301: { number: 'D1', name: 'Minimum PV voltage today', unit: 'V', times: 100, description: '' },
    0x3302: { number: 'D2', name: 'Maximum battery voltage today', unit: 'V', times: 100, description: '' },
    0x3303: { number: 'D3', name: 'Minimum battery voltage today', unit: 'V', times: 100, description: '' },
    0x3304: { number: 'D4', name: 'Consumed energy today L', unit: '', times: 100, description: '' },
    0x3305: { number: 'D5', name: 'Consumed energy today H', unit: 'KWH', times: 100, description: '' },
    0x3306: { number: 'D6', name: 'Consumed energy this month L', unit: '', times: 100, description: '' },
    0x3307: { number: 'D7', name: 'Consumed energy this month H', unit: 'KWH', times: 100, description: '' },
    0x3308: { number: 'D8', name: 'Consumed energy this year L', unit: '', times: 100, description: '' },
    0x3309: { number: 'D9', name: 'Consumed energy this year H', unit: 'KWH', times: 100, description: '' },
    0x330A: { number: 'D10', name: 'Total consumed energy L', unit: '', times: 100, description: '' },
    0x330B: { number: 'D11', name: 'Total consumed energy H', unit: 'KWH', times: 100, description: '' },
    0x330C: { number: 'D12', name: 'Generated energy today L', unit: '', times: 100, description: '' },
    0x330D: { number: 'D13', name: 'Generated energy today H', unit: 'KWH', times: 100, description: '' },
    0x330E: { number: 'D14', name: 'Generated energy this month L', unit: '', times: 100, description: '' },
    0x330F: { number: 'D15', name: 'Generated energy this month H', unit: 'KWH', times: 100, description: '' },
    0x3310: { number: 'D16', name: 'Generated energy this year L', unit: '', times: 100, description: '' },
    0x3311: { number: 'D17', name: 'Generated energy this year H', unit: 'KWH', times: 100, description: '' },
    0x3312: { number: 'D18', name: 'Total generated energy L', unit: 'KWH', times: 100, description: '' },
    0x3313: { number: 'D19', name: 'Total generated energy H', unit: '', times: 1, description: '' },
    0x331A: { number: 'D26', name: 'Battery voltage', unit: 'V', times: 100, description: '' },
    0x331B: { number: 'D27', name: 'Battery current L', unit: 'A', times: 100, description: '' },
    0x331C: { number: 'D28', name: 'Battery current H', unit: 'A', times: 100, description: '' },
  },

}
