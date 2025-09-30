// DM2008 — Activity 3a
// (Array Sampler, 25 min)

// 1. Create an array of colors (or other values)
//    You can make more than one array if you'd like
let palette = ["#f06449", "#009988", "#3c78d8", "#ffeb3b"];
let strokey = [0, 10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200];

// 2. A variable to track the current index
let currentPaletteIndex = 0;
let currentStrokeyIndex = 0;

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(0, 10);

  // 3. Use the array value at currentIndex
  fill(palette[currentPaletteIndex]);
  stroke(palette[currentPaletteIndex + 1])
  strokeWeight(strokey[currentStrokeyIndex])
  ellipse(mouseX, mouseY, 300);
}

// 4. Change the index when a key is pressed
function mousePressed() {
  // Advance to the next item
  currentPaletteIndex++;
  currentStrokeyIndex++;
  // Reset to 0 when we reach the end
  if (currentPaletteIndex >= palette.length) {
    currentPaletteIndex = 0;
  }
  if (currentStrokeyIndex >= strokey.length) {
      currentStrokeyIndex = 0;
  }
  if (currentPaletteIndex + 1 >= palette.length) {
      stroke(currentPaletteIndex = 0)
    }
}

//HW 3.
// function keyPressed() {
//   if (key == 'p') {
//  palette.push('#ee225c')
// console.log(palette);
//   }
// }

/* 
TODOs for students:
1. Replace colors with your own data (positions, text, sizes, etc).
2. Try mousePressed() instead of keyPressed().
3. Use push() to add new items, or splice() to remove them, then check how the sketch adapts.
4. Try looping through an array to visualize all the items within it instead of accessing one item at a time.
*/
