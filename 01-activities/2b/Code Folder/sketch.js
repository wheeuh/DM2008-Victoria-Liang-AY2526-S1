// DDM2008 — Activity 2b
// (Pattern Making, 40 min)
let x, y;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(0,50);

  // Horizontal row of shapes
  for (let x = 0; x < width; x += 50) {
    // Alternate colors using % (modulo)
    for (let y = 0; y < height +50; y += 50) {
      // if (x % 100 == 0) {
      //   fill(0, 255, 0);
      // } else {
      //   fill(0, 0, 255);
      // }
      // ellipse(x + 25, y+25, 40);
      noStroke()
      fill(0,0,255)
      triangle(mouseX, y - 20, x, y + 20, x + 40, y + 20);
      //specifically for a right angled trianlge, gotta draw and cartesian again for other shapes waaaa
      fill(0,255,0)
      triangle(x + 40, y + 70, x, mouseY, x + 40, y + 30);
    }
  }
}
