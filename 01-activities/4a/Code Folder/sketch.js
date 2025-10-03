// DM2008 – Activity 4a
// Bake a Cookie (30 min)

let choco, butt;
let flavour = ["chocolate", "butter", "berry"]

function setup() {
  createCanvas(400, 400);
  noStroke();
  textAlign(CENTER)
  choco = new Cookie("chocolate", 80, width / 2, height / 2);
  butt = new Cookie("butter", 80, 3*width/4, height/2);
  berry = new Cookie("berry", 80, width/4, height/2)
  // Step 3: make one cookie object
  // cookie = new Cookie("chocolate", 80, width/2, height/2);
}

function draw() {
  background("#000");
  
  choco.show();
  butt.show();
  berry.show()
  
  push();
  strokeWeight(5)
  fill(random(180,255))
  textSize(30)
  text("cookieslotmachine500", width/2, 3*height/4)
  text("!CLICK!", width/2, 1*height/4+20)
  pop();
  // Step 4: call the cookie’s show() method
  // cookie.show();
}

// Step 1: define the Cookie class
class Cookie {
  constructor(flavor, sz, x, y) {
    // set up required properties
    this.flavor = flavor;
    this.sz = sz;
    this.x = x;
    this.y = y;
  }

  // Step 2: display the cookie
  show() {
    if (this.flavor == "chocolate") {
      fill("#E18645");
      ellipse(this.x, this.y, this.sz);
      fill("#692E04");
      ellipse(this.x - 0.25 * this.sz, this.y - 0.1 * this.sz, 0.2 * this.sz);
      ellipse(this.x + 0.25 * this.sz, this.y + 0.24 * this.sz, 0.2 * this.sz);
    } else if (this.flavor == "butter") {
      fill("#E0B570");
      ellipse(this.x, this.y, this.sz);
      fill("#F8E6B1");
      ellipse(this.x, this.y, 0.7 * this.sz);
    } else if (this.flavor == "berry"){
      fill("#EB93E6");
      ellipse(this.x, this.y, this.sz);
      fill("#F50033")
      rect(this.x - 0.25 * this.sz, this.y + 0.2 * this.sz, 0.1 * this.sz, 0.2 *this.sz);
      fill("#C011F1")
      rect(this.x + 0.25 * this.sz, this.y - 0.1 * this.sz, 0.2 * this.sz, 0.1*this.sz);
    }
  }
}

// Step 5: add movement (keyboard arrows)
function keyPressed() {
  // move choco
  if (key == 'w') {
    choco.y -= 5;
  } else if (key == 's') {
    choco.y+=5
  } else if (key == 'a') {
    choco.x-=5
  } else if (key == 'd') {
    choco.x+=5
  }
  
}

// Step 6: add flavor randomizer (mouse click)
function mousePressed() {
  butt.flavor = random(flavour);
  choco.flavor = random(flavour);
  berry.flavor = random(flavour);
}
