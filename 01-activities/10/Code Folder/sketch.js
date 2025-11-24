//add position slider maybe meow

let colorBtn, sizeSlider, shapeSelect;
let shapeColor;
let xval, yval;

function setup() {
  createCanvas(640, 400);
  noStroke();
  textFont("Helvetica, Arial, sans-serif");

  // starting color
  shapeColor = color(random(255), random(255), random(255));

  // Button: change color
  colorBtn = createButton("Change Color");
  colorBtn.position(16, 16);
  colorBtn.mousePressed(randomShapeColor);
  
  function randomShapeColor() {
    shapeColor = color(random(255), random(255), random(255));
  }

  // Slider: controls size
  createP("Size").position(190, 30 ).style("margin", "4px 0 0 16px");
  createP("X Position").position(7, 88 ).style("margin", "4px 0 0 16px");
  createP("Y Position").position(190, 88 ).style("margin", "4px 0 0 16px");
  sizeSlider = createSlider(20, 220, 100, 1);
  sizeSlider.position(200, 16);
  
  //position slider
  xSlider = createSlider(40, 600, 100, 1);
  xSlider.position(16, 70)
  let xval = xSlider.value();
  
  ySlider = createSlider(40, 600, 100, 1);
  ySlider.position(200, 70)
  let yval = ySlider.value();
  


  // Dropdown: choose shape
  // createP("Shape").position(0, 160).style("margin", "8px 0 0 16px");
  shapeSelect = createSelect();
  shapeSelect.position(380, 16);
  shapeSelect.option("ellipse");
  shapeSelect.option("rect");
  shapeSelect.option("triangle");
  
  colorBtn.addClass('colorBtn');
  sizeSlider.addClass('sizeSlider');
  shapeSelect.addClass('shapeSelect');
}

function draw() {
  background(240);

  push();
  let xval = xSlider.value();
  let yval = ySlider.value();
  translate(xval, yval);
  let s = sizeSlider.value();

  fill(shapeColor);

  // draw chosen shape
  let choice = shapeSelect.value();
  if (choice === "ellipse") {
    ellipse(0, 0, s, s);
  } else if (choice === "rect") {
    rectMode(CENTER);
    rect(0, 0, s, s);
  } else if (choice === "triangle") {
    triangle(-s * 0.6, s * 0.5, 0, -s * 0.6, s * 0.6, s * 0.5);
  }
  
}
