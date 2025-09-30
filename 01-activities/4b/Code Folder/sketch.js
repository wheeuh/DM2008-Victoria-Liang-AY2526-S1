// DM2008 — Activity 4b
// Objects in Motion (60 min)

// ============================
// Step 0: Global data
// ============================
let agents = []; // array to hold many objects
const NUM_START = 15; // you can tweak this

//Edge
let leftEdge = 0;
let rightEdge;
let topEdge = 0;
let bottomEdge;

function setup() {
  createCanvas(600, 400);
  colorMode(HSL);
  noStroke();

  rightEdge = width;
  bottomEdge = height;

  // ============================
  // Step 1: Populate the array
  // - Use a loop to create multiple instances
  // - Give each instance some randomized starting values
  // ============================
  for (let i = 0; i < NUM_START; i++) {
    let sz = random(50, 150);
    let x = random(0 + sz / 2, width - sz / 2);
    let y = random(0 + sz / 2, height - sz / 2);
    let speedX = random(-8, 8);
    let speedY = random(-8, 8);
    // TODO: pass any extra properties you plan to use
    agents.push(new Agent(x, y, sz, speedX, speedY));
  }
}

function draw() {
  background(230);

  // ============================
  // Step 2: Loop through the array
  // - Call at least TWO methods on each object
  //   e.g., update() then show()
  // ============================
  for (let i = 0; i < agents.length; i++) {
    agents[i].update(); // change over time
    agents[i].show(); // draw
  }

  // ============================
  // Step 3 (optional but recommended):
  // Removal / lifespan
  // - If your objects can "die", remove them safely.
  // - Use a backward loop to avoid skipping items when splicing.
  // ============================
  // for (let i = agents.length - 1; i >= 0; i--) {
  //   if (agents[i].life <= 0) {
  //     agents.splice(i, 1);
  // }
}

// ============================
// Step 4: Interaction (optional)
// - Add new objects with mouse clicks
// - Toggle behaviors with keys
// ============================
function mousePressed() {
  let sz = random(16, 40);
  let speedX = random(-2, 2);
  let speedY = random(-2, 2);
  agents.push(new Agent(mouseX, mouseY, sz, speedX, speedY));
}

function keyPressed() {
  // Example toggles—feel free to customize
  if (key === "C") {
    // clear all agents
    agents = [];
  }

  if (key == "p" || key == "P") {
    leftEdge += 10;
    rightEdge += 10;
    topEdge += 10;
    bottomEdge +=10;
    
  }
}

// ============================
// Step 5: Define your Class
// - Must have at least 1 property that changes over time
// - Must have at least 1 method besides show()
// - Feel free to add more properties/methods
// ============================
class Agent {
  constructor(x, y, sz, speedX, speedY) {
    // Required properties
    this.x = x;
    this.y = y;
    this.sz = sz;

    // Motion
    this.dx = speedX;
    this.dy = speedY;

    // Style (customize!)
    this.h = random(270, 340);
    this.l = random(40, 80);
    this.a = random(0.2, 0.8);
    // Lifespan (optional)
    // this.life = 255; // use this if you want fade/shrink/remove behavior
  }

  // Method #1: update — change over time
  update() {
    // Basic movement
    this.x += this.dx;
    this.y += this.dy;

    // Simple screen wrap (A) or bounce (B) — pick one or implement your own:

    // (A) Wrap:
    // if (this.x > width) {
    //   this.x = 0;
    // }
    // if (this.x < 0) {
    //   this.x = width;
    // }
    // if (this.y > height) {
    //   this.y = 0;
    // }
    // if (this.y < 0) {
    //   this.y = height;
    // }

    // (B) Bounce (comment Wrap out if you use Bounce):
    if (this.x - this.sz / 2 < leftEdge || this.x + this.sz / 2 > rightEdge) {
      this.dx *= -1;
    }
    if (this.y - this.sz / 2 < topEdge || this.y + this.sz / 2 > bottomEdge) {
      this.dy *= -1;
    }
    // Example of property changing over time:
    // subtle size pulse
    // this.sz += sin(frameCount * 0.05) * 0.2;

    // Or use a lifespan:
    // this.life -= 1;        // fade over time
    // this.sz -= 0.05;     // shrink slowly
  }

  // Method #2: show — draw the object
  show() {
    // If you use HSB, set colorMode(HSB) in setup()
    // colorMode(HSB, 360, 100, 100, 255);
    fill(this.h, 90, this.l, this.a);
    ellipse(this.x, this.y, this.sz);
    // Using RGB to keep it simple
    // fill(50 + (this.h % 200), 120, 200, this.a);
  }
}
/* ============================
   TODO ideas (pick at least one):
   - Add a second method besides show(), e.g., bounce(), shrink(), changeColor()
   - Make one property evolve over time (size, hue, alpha, speed)
   - Add a key or mouse interaction that changes *all* agents (loop over array)
   - Implement removal: shrink agents and splice them when too small
============================= */
