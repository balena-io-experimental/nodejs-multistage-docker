
const SerialPort = require('serialport');


SerialPort.list(function (err, ports) {
  ports.forEach(function(port) {
    console.log(port.comName);
  });
});

console.log('Hello, world!');
