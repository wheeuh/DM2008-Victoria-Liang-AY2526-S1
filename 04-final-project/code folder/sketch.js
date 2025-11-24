let flock;
let birdColour;
let currentSetting = 0;
let species = [];
let speciesIndex = 0;
let hats = [];
let hatsIndex = 0;
let expression = [];
let expressionIndex = 0;
let bgX1 = 0;
let bgX2 = 0;
let bgX3 = 0;
let bgSpd1, bgSpd2, bgSpd3;
let showImage = true;
let startImage = true;

function preload() {
  frontclouds = loadImage("/assets/frontcloud.png");
  middleclouds = loadImage("/assets/middlecloud.png");
  backclouds = loadImage("/assets/backcloud.png");
  angry = loadImage("/assets/angry.png");
  beanie = loadImage("/assets/beanie.png");
  bow = loadImage("/assets/bow.png");
  crow = loadImage("/assets/crow.png");
  cry = loadImage("/assets/cry.png");
  derp = loadImage("/assets/derp.png");
  excited = loadImage("/assets/excited.png");
  goose = loadImage("/assets/goose.png");
  happy = loadImage("/assets/happy.png");
  orangehat = loadImage("/assets/orangehat.png");
  parrot = loadImage("/assets/parrot.png");
  tophat = loadImage("/assets/tophat.png");
  wide = loadImage("/assets/wide.png");
  start = loadImage("/assets/frame 4.png");
  choose = loadImage("/assets/group 15.png");
  addbirb = loadImage("/assets/addbirb.png");
  bgmusic = loadSound("/assets/a-rainy-day-piano-with-rain-background-3884.mp3");
}

function setup() {
  createCanvas(640, 360);

  //fill arrays after theyve been loaded 
  //(sorry i kept tryna do a forloop and it kept being weird so i manually added them.. lol..)
  species = [goose, crow, parrot];
  hats = [orangehat, tophat, beanie, bow];
  expression = [wide, cry, derp, excited, happy, angry];

  flock = new Flock();
  flock.addBoid(
    new Boid(width / 2, height / 2, hats[0], species[0], expression[2])
  );
  flock.addBoid(
    new Boid(width / 2, height / 2, hats[1], species[1], expression[1])
  );
  flock.addBoid(
    new Boid(width / 2, height / 2, hats[2], species[2], expression[4])
  );
  flock.addBoid(
    new Boid(width / 2, height / 2, hats[2], species[2], expression[4])
  );
  flock.addBoid(
    new Boid(width / 2, height / 2, hats[1], species[0], expression[4])
  );
  flock.addBoid(
    new Boid(width / 2, height / 2, hats[1], species[1], expression[2])
  );
  flock.addBoid(
    new Boid(width / 2, height / 2, hats[2], species[2], expression[4])
  );
  flock.addBoid(
    new Boid(width / 2, height / 2, hats[0], species[0], expression[0])
  );
}

function draw() {
  background("#c4cac8");

  // BACKGROUND CLOUDS /////////////////
  push();
  bgX2 += 3;
  if (bgX2 >= middleclouds.width) {
    bgX2 = 0;
  }
  middleclouds.resize(640, 0);
  image(middleclouds, bgX2, 0, middleclouds.width);
  image(middleclouds, bgX2 - middleclouds.width, 0, middleclouds.width);

  bgX3 += 1;
  if (bgX3 >= backclouds.width) {
    bgX3 = 0;
  }
  backclouds.resize(640, 0);
  image(backclouds, bgX3, 0, backclouds.width);
  image(backclouds, bgX3 - backclouds.width, 0, backclouds.width);
  pop();

  // FLOCK DRAWWWWWWW //////////////////
  flock.run();

  // CHOOSING AVATAR STUFF //////////////
  if (showImage == true) {
    image(choose, 13, 50);
    push();
    imageMode(CENTER);
    image(species[speciesIndex], width / 2 + 190, height / 2 + 50, 700, 0);
    image(hats[hatsIndex], width / 2 + 190, height / 2 + 50, 700, 0);
    image(expression[expressionIndex], width / 2 + 190, height / 2 + 50, 700, 0);
    pop();
  }

  if (showImage == false) {
    push();
    imageMode(CENTER)
    image(addbirb, width/2, height/2 - 165);
    pop();
  }

  push();
  bgX1 += 5;
  if (bgX1 >= frontclouds.width) {
    bgX1 = 0;
  }
  frontclouds.resize(640, 0);
  image(frontclouds, bgX1, 0, frontclouds.width);
  image(frontclouds, bgX1 - frontclouds.width, 0, frontclouds.width);
  pop();

  // STARTING SCREEN /////////////////
  if (startImage == true) {
    image(start, 0, 0, 640);
  }
}

function keyPressed() {
  if (key == "1") {
    startImage = !startImage;
    bgmusic.loop();
  }

  // HATS //////////////
  if (keyCode == LEFT_ARROW && currentSetting == 0) {
    if (hatsIndex == 0) {
      hatsIndex = hats.length - 1;
    } else {
      hatsIndex--;
    }
  }

  if (keyCode == RIGHT_ARROW && currentSetting == 0) {
    if (hatsIndex == hats.length - 1) {
      hatsIndex = 0;
    } else {
      hatsIndex++;
    }
  }

  // SPECIES /////////////
  if (keyCode == LEFT_ARROW && currentSetting == 2) {
    if (speciesIndex == 0) {
      speciesIndex = species.length - 1;
    } else {
      speciesIndex--;
    }
  }

  if (keyCode == RIGHT_ARROW && currentSetting == 2) {
    if (speciesIndex == species.length - 1) {
      speciesIndex = 0;
    } else {
      speciesIndex++;
    }
  }

  // EXPRESSION //////////////
  if (keyCode == LEFT_ARROW && currentSetting == 1) {
    if (expressionIndex == 0) {
      expressionIndex = expression.length - 1;
    } else {
      expressionIndex--;
    }
  }

  if (keyCode == RIGHT_ARROW && currentSetting == 1) {
    if (expressionIndex == expression.length - 1) {
      expressionIndex = 0;
    } else {
      expressionIndex++;
    }
  }

  // SAVE BUTTON ////////////
  //save button just shifts "currentSetting++"
  if (key == " ") {
    if (currentSetting == 3 - 1) {
      currentSetting = 0;
    } else {
      currentSetting++;
    }
  }

  // ENTER //////////////
  if (keyCode == 13) {
    showImage = !showImage;
    flock.addBoid(
      new Boid(
        mouseX,
        mouseY,
        hats[hatsIndex],
        species[speciesIndex],
        expression[expressionIndex]
      )
    );
  }
}
