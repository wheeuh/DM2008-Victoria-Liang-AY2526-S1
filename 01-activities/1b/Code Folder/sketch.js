// DM2008
// Activity 1b (Georg Nees)

let x;
let y;
let w;

function setup() {
  createCanvas(500, 500)
  background(240);
}

function draw() {
  
  x = random(width);
  y = random(height);
  w = random(10, 80);
  
  // i did not know switch() was a thing... 

    if (mouseX < 50){
    fill("#f5945c");
  } else if (mouseX >= 50 && mouseX < 100){
    fill("#fec76f");
  } else if (mouseX >= 100 && mouseX < 150){
    fill("#b3be62");
  } else if (mouseX >= 150 && mouseX < 250){
    fill("#75ba75");
  } else if (mouseX >= 200 && mouseX < 250){
    fill("#6dbfb8");
  } else if (mouseX >= 250 && mouseX < 300){
    fill("#71a3c1");
  } else if (mouseX >= 350 && mouseX < 400){
    fill("#be95be");
  } else if (mouseX >= 400 && mouseX < 450){
    fill("#df4491");
  } else if (mouseX >= 450){
    fill("#ee225c");
  }

    if (mouseY < 50){
    stroke("#f5945c");
  } else if (mouseY >= 50 && mouseY < 100){
    stroke("#fec76f");
  } else if (mouseY >= 100 && mouseY < 150){
    stroke("#b3be62");
  } else if (mouseY >= 150 && mouseY < 250){
    stroke("#75ba75");
  } else if (mouseY >= 200 && mouseY < 250){
    stroke("#6dbfb8");
  } else if (mouseY >= 250 && mouseY < 300){
    stroke("#71a3c1");
  } else if (mouseY >= 350 && mouseY < 400){
    stroke("#be95be");
  } else if (mouseY >= 400 && mouseY < 450){
    stroke("#df4491");
  } else if (mouseY >= 450){
    stroke("#ee225c");
  }

  
  strokeWeight(5);
  ellipse(x, y, w, w);

}
// function keyPressed() {
//     saveCanvas("activity1b-image", "jpg");
// }