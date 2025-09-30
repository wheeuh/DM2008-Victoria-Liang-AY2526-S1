// DDM2008
// Activity 1a

// Run the sketch, then click on the preview to enable keyboard
// Use the 'Option' ('Alt' on Windows) key to view or hide the grid
// Use the 'Shift' key to change overlays between black & white
// Write the code for your creature in the space provided


let c;
let e = 70

function setup() {
  createCanvas(400, 400);
  c = color("#19BE24");
}

function draw() {
  background(0);
  noStroke();
  fill("#ee225c")
  ellipse(200,200,200,100);
  triangle(100,200,100,100,150,160);
  triangle(300,200,300,100,250,160);
  
  stroke("#ee225c");
  strokeWeight(8);
  strokeCap(SQUARE);
  line(200,150,200,115);
  line(225,160,230,125);
  line(175,160,170,125);
  
  noStroke();
  fill("#EBFDDD");
  ellipse(200,200,130,e);
  
  noStroke();
   fill("#234906");
  ellipse(200,200,70,45);
  
  noStroke();
   fill(c);
  ellipse(200,200,10,20);
  triangle(195,200,200,215,205,200)
  triangle(195,200,200,185,205,200)
  
  let r 
  
  fill(random(0,255,0,255,0,255));
  textSize(40);
  strokeWeight(2);
  text("meowzer3000",81,300);
  
  text("👆", mouseX, mouseY)
  
  // e = e - 1
  
  helperGrid(); // do not edit or remove this line
}
