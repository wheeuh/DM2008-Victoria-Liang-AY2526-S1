// DM2008 — Activity 3b
// (One Function Wonder, 15 min)

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  
}

function draw() {
  background(220);
  drawCat(mouseX, mouseY, 200, 100);

  for (let i=0; i<5; i++) {
   drawCat(mouseX*i/5, mouseY*i/5, 20*i, 10*i)
 }
  
  function drawCat(x, y, w, h) {
//parameterizing slightly wrong bcos now w MUST be 2*h for the cat to be same shape
    noStroke();
    fill('#ee225c');
    ellipse(x, y, w, h);
    triangle(x - w / 2, y, x - w / 2, y - h, x, y);
    triangle(x, y, x + w / 2, y - h, x + w / 2, y);
  }
}

function keyPressed() {
  if (key == 's'){
    save()
  }
}

  // TODO 1:
  // Define a function that draws something (a shape or group of shapes).
  // It should take at least one parameter (e.g., position, size, or color).

  // TODO 2:
  // Call your function multiple times with different parameter values.
  // myShape(100, 200, 50);
  // myShape(300, 200, 80);

  // TODO 3:
  // (Challenge) Call your function inside a for loop
  // to create a repeating pattern or variation.

// Example starter function:
// function myShape(x, y, s) {
//   ellipse(x, y, s, s);
// }
