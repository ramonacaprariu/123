var serial;
var usbPort = "/dev/cu.usbmodem1451";

var x = 0;
var y = 0;
var prev_x = 0;
var prev_y = 0;
var words =  ["house", "window", "cube", "heart", "car", "robot", "castle"];

var maxTime = 17000;
var $$$$$ = 0

function setup() {
  // Instantiate our SerialPort object
  serial = new p5.SerialPort ();

  // Add handlers
  serial.on('list', gotList);
  serial.on('data', gotData);
  serial.on('error', gotError);
  serial.on('open', gotOpen);

  createCanvas(windowWidth, windowHeight);

  // Set background colour
  background(250, 184, 252);

  // Set line thickness
  strokeWeight( 2 );
}

function gotList(ports) {
  for (var i = 0; i < ports.length; i++) {
    if ( ports[i].indexOf( "cu.usb" ) != -1 ){
      usbPort = ports[i];
    }
  }

  serial.open(usbPort);
}

function gotOpen() {
  console.log("Serial Port is open!");
}

function gotError(error) {
  console.log(error);
}

function gotData() {
  var currentString = trim(serial.readStringUntil("\r\n"));
  if(!currentString){
    return;
  }
  // Trim white space and split data on commas
  var data = split( trim( currentString ), ',' );
  if(data.length < 3){
    return;
  }

  x = parseInt(map( data[0], 0, 1023, 0, width ));
  y = parseInt(map( data[1], 0, 1023, 0, height ));
}

function draw() {

var word = random(words);
textSize(58);
text(word, 750, 500);


  // Turn on stroke
  stroke(238, 244, 0);
  strokeWeight(10);

  var timeLeft = maxTime-millis();
  //text(timeLeft, width/2, height/2);

  if(timeLeft<=0)
  {
    noStroke();
    fill(255, 0, 0);
   
   background(250, 184, 252);
   text("TIME'S UP!", 700, 500); 
   textSize(58);
  }

  if(timeLeft>=1 && timeLeft<=100 && $$$$$ == 0)
  {
  save('myCanvas.jpg');
  $$$$$ = 8
  }

  console.log(timeLeft);
  // Draw a line from current to previous X,Y
  line( x, y, prev_x, prev_y );

  // Store X,Y position for next frame
  prev_x = x;
  prev_y = y;

  // Set the fill colour to transparent white
  fill( 255, 255, 255, 2 );

  // Turn off stroke
  noStroke();

  // Fill screen with transparent white
  rect( 0,0, width, height ); 
}
  function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight); 
}