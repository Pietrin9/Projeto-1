function setup() {
  createCanvas(1000, 800);
  background("#D14DE7");
}

function draw() {

 
  fill ("purple");
  stroke ("black");
  if (mouseIsPressed)
   circle(mouseX, mouseY,50 );
}
