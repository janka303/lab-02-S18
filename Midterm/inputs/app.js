var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8080;
var allClients="";
var bodyParser = require('body-parser');
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
	client.emit('messages', {alertBox:'hi there'});

	client.on('setClientName', function(data){
		console.log(data + " has connected");
		client.clientName = data;
		//allClients += data + " ";
	});

	client.on('submission', function(data){
		client.broadcast.emit('submission',  {
			clientName: client.clientName,
			content: data});
		console.log("submission: " + data);
	});

	client.on('getOthersNames', function(){
		client.emit('getOthersNames', {list: allClients});

	});

});

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
	console.log('serving index.html');
	res.sendFile(__dirname + '/index.html');

});

var savedData = [];

function loop(){

	// if(savedData.length > 0){
	// 	mySerialPort.write("1");
	// }else if(savedData.length === 0){
	// 	mySerialPort.write("0");
	// }
	
	savedData.forEach(function(time){
		if(time - Date.now() < 600000){ //10 minutes = 600000 miliseconds
			mySerialPort.write("1");
		}else{
			mySerialPort.write("0");
		}
	})
}

setInterval(loop, 200);


app.post('/save', function(req, res) { 
    console.log("save");
    //savedData.push(req.body);
    // var timeMonth = req.body.month - 1;
    var dateString = req.body.year + '-' +
		req.body.month + '-' +
		req.body.day + 'T' +
		req.body.hour + ':' +
		req.body.minute + ':' +
		'00';
	console.log(dateString);
    var time = Date.parse(dateString);
	console.log(time);
    savedData.push(time);
    res.end();
});

app.get('/saveData', function(req,res){
	res.json(savedData);
});

