
const SerialPort = require('serialport');
console.log('Hello, pkg!');

SerialPort.list(function (err, ports) {
  ports.forEach(function(port) {
    console.log(port.comName);
  });
});