

//Lists Serialports available
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8080;
var SerialPort = require('serialport');
var serialVal;

var mySerialPort = new SerialPort('COM9', { //paste your port path here
  parser: new SerialPort.parsers.Readline('\n')
});



server.listen(port, function(){
	console.log('Server listening on ' + port);
});

io.on('connection',function(client){
	console.log('Socket connected...');
  	client.emit('initialMessage');

  		client.on('0', function(){
  			console.log("key up")
	 		mySerialPort.write("0");

		});

		client.on('1', function(){
			console.log("key down")

	 		mySerialPort.write("1");

		});

	});



app.get('/', function(req,res){
	console.log('serving index.html');
	res.sendFile(__dirname + '/digitalWrite.html');

});

