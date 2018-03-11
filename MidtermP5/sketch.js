// Be sure to choose File > Import Library > p5.serialport.js from the P5 IDE main menu to load serial library

// Terminal command to install p5.serialserver:  npm install p5.serialserver
// Terminal command to start server:  node ~/node_modules/p5.serialserver/startserver.js

// var serial;                            // variable to hold an instance of the serialport library
// var options = { baudrate: 9600};      // set baudrate to 9600; must match Arduino baudrate
// var portName = '/dev/cu.usbserial-DA00WVK6'; // fill in your serial port name here
// var inData;                            // for incoming serial data
// var slider;










// function setup(){
// 	createCanvas(windowWidth, windowHeight);
// 	background(0);

// 	serial = new p5.SerialPort();    // make a new instance of the serialport library
//     serial.on('data', serialEvent);  // callback for when new data arrives
//     serial.on('error', serialError); // callback for errors
//     serial.open(portName, options);           // open a serial port @ 9600 
  
// }

// function draw(){
// 	fill(255);
//   if (inData){
//     var mappedBackground = map(inData, 0, 1023, 0, 255);
//     background(mappedBackground); 
//     if (inData > 800){
//       fill(0);
//     }
//   }
//   else {
//   background(0);
//   }
  
//   text("sensor value: " + inData, 30, 30);
//   text("background value: " + mappedBackground, 30, 50);
// }





// function serialEvent() {
//   // inData = Number(serial.read());   // can use this when just looking for 1 byte msgs from Arduino
  
//   // Alternatively, read a string from the serial port, looking for new line as data separator:
//   var inString = serial.readStringUntil('\r\n');
//   // check to see that there's actually a string there:
//   if (inString.length > 0 ) {
//     // convert it to a number:
//     inData = Number(inString);
//   }
// }


// function serialError(err) {
//   println('Something went wrong with the serial port. ' + err);
// }

// var input, button, greeting;

// function setup() {

//   // create canvas
//   createCanvas(710, 400);

//   input = createInput();
//   input.position(20, 65);

//   button = createButton('submit');
//   button.position(input.x + input.width, 65);
//   button.mousePressed(greet);

//   greeting = createElement('h2', 'what is your name?');
//   greeting.position(20, 5);

//   textAlign(CENTER);
//   textSize(50);
// }

// function greet() {
//   var name = input.value();
//   greeting.html('hello '+name+'!');
//   input.value('');

//   for (var i=0; i<200; i++) {
//     push();
//     fill(random(255), 255, 255);
//     translate(random(width), random(height));
//     rotate(random(2*PI));
//     text(name, 0, 0);
//     pop();
//   }
// }

var input, button, greeting;

function setup(){
  createCanvas(800,800);
  background(255);
  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);

}

function draw(){

}

function greet() {
  var name = input.value();
  greeting.html('hello '+name+'!');
  input.value('');

  for (var i=0; i<200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  }
}
