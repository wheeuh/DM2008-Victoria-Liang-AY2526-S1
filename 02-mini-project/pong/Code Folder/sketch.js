// DM2008 — Mini Project
// PONG (Starter Scaffold)

// paddles may block e/o due to keyboard hardware limitation bopian

// Notes for students:
// 1) DONE! Add paddle controls (W/S and ↑/↓) inside handleInput()
// 2) DONE! Add scoring + reset when the ball goes past a paddle
// 3) DONE! Add win conditions / start + game-over states if you want

/* ----------------- Globals ----------------- */
let leftPaddle, rightPaddle, ball;
let gameStarted = false;
let gameOver = false;
let gamePaused = false;
let score1 = 0;
let score2 = 0;
let accentColour = "#72C6DA";
let backgroundColour = 18;
let paddlehit, paddle, ballpng, font, winsound, stars;

function preload() {
  paddlehit = loadSound("assets/paddlehit.mp3");
  winsound = loadSound("assets/win.mp3");
  bgm = loadSound("assets/bgm.mp3");
  paddle = loadImage("assets/paddle.png");
  ballpng = loadImage("assets/ballpng.png");
  bg = loadImage("assets/bg.png");
  startbg = loadImage("assets/startbg.png");
  stars = loadImage("assets/stars.png");
  font = loadFont("assets/PPNeueBit-Bold.otf");
}

/* ----------------- Setup & Draw ----------------- */
function setup() {
  createCanvas(640, 360);
  noStroke();
  textFont(font);

  // paddles: x, y, w, h
  leftPaddle = new Paddle(30, height / 2 - 30, 10, 60);
  rightPaddle = new Paddle(width - 40, height / 2 - 30, 10, 60);

  // ball starts center with a gentle push
  ball = new Ball(width / 2, height / 2, 8);

  // resize image once in setup()
  paddle.resize(0, 60);
}

function draw() {
  push();
  imageMode(CENTER);
  bg.resize(640, 360);
  image(startbg, width / 2, height / 2);
  pop();
  //start rematch with space
  if (gameOver) {
    if (keyIsPressed) {
      if (keyCode === 13) {
        score1 = 0;
        score2 = 0;
        gameStarted = false;
        gameOver = false;
      }
    }
  }

  //player win + rematch screen
  if (score1 == 5) {
    textAlign(CENTER);
    fill(accentColour);
    textSize(20);
    text("WIN!", width / 2, height / 2 - 25);
    textSize(10);
    text("ENTER to rematch!", width / 2, 330);
    textSize(50);
    text("PLAYER 1", width / 2, height / 2 + 25);
    gameOver = true;
    //make state for gamewin then right after playing the sound gamewin false FF
    return;
  }

  if (score2 == 5) {
    textAlign(CENTER);
    fill(accentColour);
    textSize(20);
    text("WIN!", width / 2, height / 2 - 25);
    textSize(10);
    text("ENTER to rematch!", width / 2, 330);
    textSize(50);
    text("PLAYER 2", width / 2, height / 2 + 25);
    gameOver = true;
    return;
  }

  //intro page stuff
  if (keyIsPressed) {
    if (keyCode === 13) {
      gameStarted = true;
      winsound.play();
      bgm.play();
    }
  } // must be before return because gameStarted starts false so itll keep returning b4 it can check for spacebar

  if (!gameStarted) {
    // fill("#000");
    // rect(0, 0, 640, 360);
    fill(accentColour);
    textAlign(CENTER);
    textSize(30);
    text("Click here and press ENTER to start!", width / 2, height / 2 - 10);
    textAlign(RIGHT);
    textSize(15);
    // text("Controls:", width / 2 - 10, height / 2 + 20);
    text("First to 5 points WINS!", width / 2 - 10, height / 2 + 20);
    text("Press 'P' to pause!", width / 2 - 10, height / 2 + 40);
    textAlign(LEFT);
    text("W/S for Left: Player 1", width / 2 + 10, height / 2 + 20);
    text("↑/↓ for Right: Player 2", width / 2 + 10, height / 2 + 40);
    return; //return nothing (blank screen)
  }

  push();
  imageMode(CENTER);
  bg.resize(640, 360);
  image(bg, width / 2, height / 2);
  pop();

  // 1) read input (students: add paddle movement here)
  handleInput();

  // 2) update world + pause
  if (keyIsPressed) {
    if (key == " ") {
      gamePaused = true;
    }
    if (key == "o" || key == "O") {
      gamePaused = false;
    }
  }

  if (gamePaused == false) {
    leftPaddle.update();
    rightPaddle.update();
    ball.update();
  } else if (gamePaused == true) {
    push();
    imageMode(CENTER);
    bg.resize(640, 360);
    image(startbg, width / 2, height / 2);
    pop();
    fill(accentColour);
    textAlign(CENTER);
    textSize(30);
    text("Press 'o' to unpause immediately!", width / 2, height / 2);
    return;
  }

  // 3) handle collisions
  ball.checkWallBounce(); // top/bottom
  ball.checkPaddleBounce(leftPaddle);
  ball.checkPaddleBounce(rightPaddle);

  // 4) draw everything
  // drawCourt();
  leftPaddle.show();
  rightPaddle.show();
  fill(accentColour);
  ball.show();
  textSize(30);
  text(score1, 300, 30);
  text(score2, 340, 30);
  textAlign(CENTER);
  // push();
  // rectMode(CENTER);
  // fill(backgroundColour);
  // rect(width / 2, 335, 10, 30);
  // pop();
  text("SPACEBAR to pause! ", width / 2, 340);
}

/* ----------------- Input ----------------- */
function handleInput() {
  if (keyIsPressed) {
    if (key == "W" || key == "w") {
      leftPaddle.vy -= leftPaddle.speed;
    }
    if (key == "s" || key == "S") {
      leftPaddle.vy += leftPaddle.speed;
    }
    if (keyCode == UP_ARROW) {
      rightPaddle.vy -= rightPaddle.speed;
    }
    if (keyCode == DOWN_ARROW) {
      rightPaddle.vy += rightPaddle.speed;
    }
  }
}

function keyReleased() {
  leftPaddle.vy = 0;
  rightPaddle.vy = 0;
}

/* ----------------- Classes ----------------- */
class Paddle {
  constructor(x, y, w, h) {
    this.pos = createVector(x, y);
    this.w = w;
    this.h = h;
    this.vy = 0; // changed by input
    this.speed = 1;

    // Hit animation state
    this.hasBeenHit = false;
    this.hitAnimStarted = false;
    this.animStartTime = 0;

    // Variables for the star burst
    this.hitDurationMs = 600; // how long the flash lasts
    this.starStartSize = 40; // starting size (px)
    this.starEndSize = 120; // ending size (px)
  }

  // Call this when the ball hits the paddle
  startHitAnim() {
    this.hasBeenHit = true;
    this.hitAnimStarted = true;
    this.animStartTime = millis();
  }

  update() {
    this.pos.y += this.vy;
    this.pos.y = constrain(this.pos.y, 0, height - this.h);

    // Optional: simple friction cap to prevent runaway acceleration
    this.vy = constrain(this.vy, -12, 12);
  }

  show() {
    // --- Paddle body ---
    noFill();
    rect(this.pos.x, this.pos.y, this.w, this.h, 2);

    // Draw the paddle image aligned to the rect (top-left)
    // Tip: resize 'paddle' once in setup: paddle.resize(0, 60)
    image(paddle, this.pos.x, this.pos.y);

    // --- Hit animation ---
    if (this.hasBeenHit) {
      const elapsed = millis() - this.animStartTime;

      if (!this.hitAnimStarted) {
        // Safety: if someone set hasBeenHit=true without calling startHitAnim()
        this.hitAnimStarted = true;
        this.animStartTime = millis();
      }

      if (elapsed <= this.hitDurationMs) {
        const t = elapsed / this.hitDurationMs; // 0 to 1
        const sz = lerp(this.starStartSize, this.starEndSize, t);
        const a = 255 * (1 - t); // fade out

        push();
        imageMode(CENTER);
        tint(255, a);
        image(
          stars,
          this.pos.x + this.w / 2,
          this.pos.y + this.h / 2,
          sz,
          sz * 1.6
        );
        pop();
      } else {
        // animation finished; reset flags
        this.hasBeenHit = false;
        this.hitAnimStarted = false;
      }
    }
  }
}

class Ball {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
    // gentle random direction
    this.vel = createVector(0, 0);
    this.vel.x = random([-1, 1]) * 2.0;
    this.vel.y = random([-1, 1]) * 3.0;
  }

  update() {
    this.pos.add(this.vel);
  }

  checkWallBounce() {
    // bounce off top/bottom
    if (this.pos.y - this.r <= 0 || this.pos.y + this.r >= height) {
      this.vel.y *= -1;
      this.pos.y = constrain(this.pos.y, this.r, height - this.r);
    }

    if (this.pos.x + this.r < 0) {
      score2 += 1;
      ball.reset();
    }
    if (this.pos.x - this.r > width) {
      score1 += 1;
      ball.reset();
    }
  }

  checkPaddleBounce(p) {
    // AABB-then-circle quick check (simple & forgiving)
    const withinY = this.pos.y > p.pos.y && this.pos.y < p.pos.y + p.h;
    const withinX =
      this.pos.x + this.r > p.pos.x && this.pos.x - this.r < p.pos.x + p.w;

    if (withinX && withinY) {
      // push ball out so it doesn't get stuck
      if (this.vel.x < 0) {
        this.pos.x = p.pos.x + p.w + this.r;
      } else {
        this.pos.x = p.pos.x - this.r;
      }
      this.vel.x *= -1.1; // reflect horizontally + faster as rally progresses
      paddlehit.play();
      p.hasBeenHit = true;
      p.startHitAnim();
    }
  }

  show() {
    push();
    noFill();
    circle(this.pos.x, this.pos.y, this.r * 2);
    ballpng.resize(0, 24);
    image(ballpng, this.pos.x - 13, this.pos.y - 13);
    pop();
  }

  reset() {
    this.pos.set(width / 2, height / 2);
    this.vel.set(random([-1, 1]) * 2.0, random([-1, 1]) * 3.0);
  }
}

/* ----------------- UI helpers ----------------- */
// function drawCourt() {
//   image(bg, 640, 360);
//   // center line
//   // stroke(80);
//   // strokeWeight(2);
//   // for (let y = 10; y < height; y += 18) {
//   //   line(width / 2, y, width / 2, y + 8);
// }
// // noStroke();
