# epever-node-prometheus-exporter
Prometheus exporter for Epever Charge Controller

## get started

Clone the repo:
```bash
git clone https://github.com/metaspan/epever-node-prometheus-exporter
cd epever-node-prometheus-exporter
npm install
```

Edit config in index.js:
```js
const config = {
  // my device connected via USB
  ttyDevice: '/dev/ttyACM0',
  baudrate: 115200,
  // prefix in exporter
  prefix: 'epsolar'
}
```

Run the service:
```bash
node index.js
```

## PM2

```bash
pm2 start --name epever-node-prometheus-exporter index.js
```

## Example output

```prometheus
# Charging device on/off
epsolar_H1{register="1", address="0x0", unit="undefined", times="undefined"} 0
#
# register: 1, address: 0x1 NOT SUPPORTED BY DEVICE
#
# Manual control the load
epsolar_H3{register="1", address="0x2", unit="undefined", times="undefined"} 1
# Default control the load
epsolar_H4{register="1", address="0x3", unit="undefined", times="undefined"} 0
# Enable load test mode
epsolar_H6{register="1", address="0x5", unit="undefined", times="undefined"} 0
# Force the load on/off
epsolar_H7{register="1", address="0x6", unit="undefined", times="undefined"} 0
# Restore system defaults
epsolar_H20{register="1", address="0x13", unit="undefined", times="undefined"} 0
# Clear generating electricity statistics
epsolar_H21{register="1", address="0x14", unit="undefined", times="undefined"} 0
# Over temperature inside the device
epsolar_I1{register="2", address="0x2000", unit="undefined", times="undefined"} 0
# Day/Night
epsolar_I12{register="2", address="0x200c", unit="undefined", times="undefined"} 0
# Battery Type
epsolar_E1{register="3", address="0x9000", unit="", times="1"} 1
# Battery Capacity
epsolar_E2{register="3", address="0x9001", unit="AH", times="1"} 200
# Temperature compensation coefficient
epsolar_E3{register="3", address="0x9002", unit="mV/°C/2V", times="100"} 300
# High Volt. disconnect
epsolar_E4{register="3", address="0x9003", unit="V", times="100"} 1600
# Charging limit voltage
epsolar_E5{register="3", address="0x9004", unit="V", times="100"} 1500
# Over voltage reconnect
epsolar_E6{register="3", address="0x9005", unit="V", times="100"} 1500
# Equalization voltage
epsolar_E7{register="3", address="0x9006", unit="V", times="100"} 1460
# Boost voltage
epsolar_E8{register="3", address="0x9007", unit="V", times="100"} 1440
# Float voltage
epsolar_E9{register="3", address="0x9008", unit="V", times="100"} 1380
# Boost reconnect voltage
epsolar_E10{register="3", address="0x9009", unit="V", times="100"} 1320
# Low voltage reconnect
epsolar_E11{register="3", address="0x900a", unit="V", times="100"} 1260
# Under voltage recover
epsolar_E12{register="3", address="0x900b", unit="V", times="100"} 1220
# Under voltage warning
epsolar_E13{register="3", address="0x900c", unit="V", times="100"} 1200
# Low voltage disconnect
epsolar_E14{register="3", address="0x900d", unit="V", times="100"} 1110
# Discharging limit voltage
epsolar_E15{register="3", address="0x900e", unit="V", times="100"} 1060
# Real time clock
epsolar_E20{register="3", address="0x9013", unit="", times="1"} 8984
# Real time clock
epsolar_E21{register="3", address="0x9014", unit="", times="1"} 776
# Real time clock
epsolar_E22{register="3", address="0x9015", unit="", times="1"} 3329
# Battery temperature warning upper limit
epsolar_E24{register="3", address="0x9017", unit="°C", times="100"} 6500
# Battery temperature warning lower limit
epsolar_E25{register="3", address="0x9018", unit="", times="100"} 61536
# Controller inner temperature upper limit
epsolar_E26{register="3", address="0x9019", unit="", times="100"} 8500
# Controller inner temperature upper limit recover
epsolar_E27{register="3", address="0x901a", unit="", times="100"} 7500
# Day TimeThreshold Volt.(DTTV)
epsolar_E31{register="3", address="0x901e", unit="", times="100"} 500
# Light signal startup (night) delay time
epsolar_E32{register="3", address="0x901f", unit="", times="100"} 10
# Light Time Threshold Volt.(NTTV)
epsolar_E33{register="3", address="0x9020", unit="", times="100"} 600
# Light signal close (day) delay time
epsolar_E34{register="3", address="0x9021", unit="", times="100"} 10
# Load controlling modes
epsolar_E62{register="3", address="0x903d", unit="", times="100"} 0
# Working time length 1
epsolar_E63{register="3", address="0x903e", unit="", times="100"} 256
# Working time length 2
epsolar_E64{register="3", address="0x903f", unit="", times="100"} 256
# Turn on timing 1
epsolar_E67{register="3", address="0x9042", unit="Sed", times="100"} 0
# 
epsolar_E68{register="3", address="0x9043", unit="Min", times="100"} 0
# 
epsolar_E69{register="3", address="0x9044", unit="Hour", times="100"} 19
# Turn off timing 1
epsolar_E70{register="3", address="0x9045", unit="Sec", times="100"} 0
# 
epsolar_E71{register="3", address="0x9046", unit="Min", times="100"} 0
# 
epsolar_E72{register="3", address="0x9047", unit="Hour", times="100"} 6
# Turn on timing 2
epsolar_E73{register="3", address="0x9048", unit="Sec", times="100"} 0
# 
epsolar_E74{register="3", address="0x9049", unit="Min", times="100"} 0
# 
epsolar_E75{register="3", address="0x904a", unit="Hour", times="100"} 19
# Turn off timing 2
epsolar_E76{register="3", address="0x904b", unit="Sec", times="100"} 0
# 
epsolar_E77{register="3", address="0x904c", unit="Min", times="100"} 0
# 
epsolar_E78{register="3", address="0x904d", unit="Hour", times="100"} 6
# Backlight time
epsolar_E100{register="3", address="0x9063", unit="S", times="100"} 60
# Length of night
epsolar_E102{register="3", address="0x9065", unit="S", times="100"} 1553
#
# register: 3, address: 0x9066 NOT SUPPORTED BY DEVICE
#
# Battery rated voltage code
epsolar_E104{register="3", address="0x9067", unit="", times="100"} 0
# Default Load On/Off in manual mode
epsolar_E107{register="3", address="0x906a", unit="", times="100"} 1
# Equalize duration
epsolar_E109{register="3", address="0x906b", unit="Min", times="100"} 120
# Boost duration
epsolar_E100{register="3", address="0x906c", unit="Min", times="100"} 120
# Discharging percentage
epsolar_E110{register="3", address="0x906d", unit="%", times="100"} 30
# Charging percentage
epsolar_E111{register="3", address="0x906e", unit="%", times="100"} 100
# Management modes of battery charging and discharging
epsolar_E113{register="3", address="0x9070", unit="", times="100"} 0
# array rated voltage
epsolar__0{register="4", address="0x3000", unit="V", times="100"} 10000
# array rated current
epsolar__1{register="4", address="0x3001", unit="A", times="100"} 4000
# array rated power L
epsolar__2{register="4", address="0x3002", unit="W", times="100"} 38464
# array rated power H
epsolar__3{register="4", address="0x3003", unit="W", times="100"} 1
# Battery rated voltage
epsolar__4{register="4", address="0x3004", unit="V", times="100"} 2400
# Battery rated current
epsolar__5{register="4", address="0x3005", unit="A", times="100"} 4000
# Battery rated power L
epsolar__6{register="4", address="0x3006", unit="W", times="100"} 38464
# Battery rated power H
epsolar__7{register="4", address="0x3007", unit="W", times="100"} 1
# Charging mode
epsolar__8{register="4", address="0x3008", unit="", times="1"} 2
# Rated current of load
epsolar__E{register="4", address="0x300e", unit="W", times="100"} 4000
# PV array input voltage
epsolar_B1{register="4", address="0x3100", unit="V", times="100"} 1490
# PV array input current
epsolar_B2{register="4", address="0x3101", unit="A", times="100"} 7
# PV array input power L
epsolar_B3{register="4", address="0x3102", unit="W", times="100"} 108
# PV array input power H
epsolar_B4{register="4", address="0x3103", unit="W", times="100"} 0
# Battery power L
epsolar_B7{register="4", address="0x3106", unit="W", times="100"} 81
# Battery power H
epsolar_B8{register="4", address="0x3107", unit="W", times="100"} 0
# Load voltage
epsolar_B13{register="4", address="0x310c", unit="V", times="100"} 1360
# Load current
epsolar_B14{register="4", address="0x310d", unit="A", times="100"} 24
# Load power L
epsolar_B15{register="4", address="0x310e", unit="W", times="100"} 340
# Load power H
epsolar_B16{register="4", address="0x310f", unit="W", times="100"} 0
# Battery Temperature
epsolar_B17{register="4", address="0x3110", unit="°C", times="100"} 2175
# Temperature inside equipment
epsolar_B18{register="4", address="0x3111", unit="°C", times="100"} 2561
# Battery SOC
epsolar_B27{register="4", address="0x311a", unit="%", times="100"} 91
# Remote battery temperature
epsolar_B28{register="4", address="0x311b", unit="°C", times="100"} 0
# Battery's real rated power
epsolar_B30{register="4", address="0x311d", unit="°C", times="100"} 1200
# Battery status
epsolar_C1{register="4", address="0x3200", unit="", times="1"} 0
# Charging equipment status
epsolar_C2{register="4", address="0x3201", unit="", times="1"} 7
# Discharging equipment status
epsolar_C7{register="4", address="0x3202", unit="", times="1"} 1
# Maximum PV voltage today
epsolar_D0{register="4", address="0x3300", unit="V", times="100"} 2346
# Minimum PV voltage today
epsolar_D1{register="4", address="0x3301", unit="V", times="100"} 1285
# Maximum battery voltage today
epsolar_D2{register="4", address="0x3302", unit="V", times="100"} 1506
# Minimum battery voltage today
epsolar_D3{register="4", address="0x3303", unit="V", times="100"} 1291
# Consumed energy today L
epsolar_D4{register="4", address="0x3304", unit="", times="100"} 3
# Consumed energy today H
epsolar_D5{register="4", address="0x3305", unit="KWH", times="100"} 0
# Consumed energy this month L
epsolar_D6{register="4", address="0x3306", unit="", times="100"} 12
# Consumed energy this month H
epsolar_D7{register="4", address="0x3307", unit="KWH", times="100"} 0
# Consumed energy this year L
epsolar_D8{register="4", address="0x3308", unit="", times="100"} 12
# Consumed energy this year H
epsolar_D9{register="4", address="0x3309", unit="KWH", times="100"} 0
# Total consumed energy L
epsolar_D10{register="4", address="0x330a", unit="", times="100"} 12
# Total consumed energy H
epsolar_D11{register="4", address="0x330b", unit="KWH", times="100"} 0
# Generated energy today L
epsolar_D12{register="4", address="0x330c", unit="", times="100"} 4
# Generated energy today H
epsolar_D13{register="4", address="0x330d", unit="KWH", times="100"} 0
# Generated energy this month L
epsolar_D14{register="4", address="0x330e", unit="", times="100"} 12
# Generated energy this month H
epsolar_D15{register="4", address="0x330f", unit="KWH", times="100"} 0
# Generated energy this year L
epsolar_D16{register="4", address="0x3310", unit="", times="100"} 12
# Generated energy this year H
epsolar_D17{register="4", address="0x3311", unit="KWH", times="100"} 0
# Total generated energy L
epsolar_D18{register="4", address="0x3312", unit="KWH", times="100"} 12
# Total generated energy H
epsolar_D19{register="4", address="0x3313", unit="", times="1"} 0
# Battery voltage
epsolar_D26{register="4", address="0x331a", unit="V", times="100"} 1360
# Battery current L
epsolar_D27{register="4", address="0x331b", unit="A", times="100"} 65513
# Battery current H
epsolar_D28{register="4", address="0x331c", unit="A", times="100"} 65535

```
