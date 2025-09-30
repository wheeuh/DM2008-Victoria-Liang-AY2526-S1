// DM2008 – Activity 5a
// Colliding Circles (30 min)

let balls = [];

function setup() {
  createCanvas(400, 400);

  // Step 1: create two Ball objects
  balls.push(new Ball(50, 30, 30));
  balls.push(new Ball(70, 60, 20));
}

function draw() {
  background(230);

  // Step 2: update and display each ball
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.move();
    b.show();
    
  // Step 3: check collisions
  // Use dist() between ball centers
  // Trigger feedback (color, bounce, etc.)
    b.checkCollision(balls)
  }
}

class Ball {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
    this.vel = createVector(random(-2, 2), random(-2, 2));
  }

  move() {
    this.pos.add(this.vel);
    
    if (this.pos.x - this.r < 0) {this.vel.x *= -1}
    if (this.pos.x + this.r > width) {this.vel.x *= -1}
    if (this.pos.y + this.r > height) {this.vel.y *= -1}
    if (this.pos.y - this.r < 0) {this.vel.y *= -1}
  }

  show() {
    fill(100, 180, 220);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

    checkCollision(others) {
    for (let i = 0; i < others.length; i++) {
      // Make sure we do not compare the ball to itself
      // !== means 'is not'
      if (others[i] !== this) {
        let other = others[i];
        // pos.x is a vector, so its js doing this.vector.vector'sx
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if (d < this.r + other.r) {
          push();
          noStroke()
          fill('#ee225c')
          ellipse(this.pos.x, this.pos.y, this.r * 2); // highlight on collision
          pop();
        }
      }
    }
  }
}

function keyPressed () {
  if (key == 'b') {
  balls.push(new Ball(width/2, height/2, random(2,50)));
  }
}
  
    

  
  // Step 4: Add a method to checkCollision(others)
  // Use dist() and respond visually