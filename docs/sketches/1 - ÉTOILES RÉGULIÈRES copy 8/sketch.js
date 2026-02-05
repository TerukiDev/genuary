// GENUARY DAY 08: A City.
// ÉTOILES RÉGULIÈRES

/* Procedural metropolis: skyline with randomized buildings and windows. */
const NP = 480;
let buildings = [];
function setup() {
  createCanvas(NP, NP);
  noLoop();
  generateCity();
}

function generateCity() {
  buildings = [];
  const cols = 24;
  let x = 0;
  for (let i = 0; i < cols; i++) {
    const w = random(12, 28);
    const h = random(60, height * 0.9);
    buildings.push({
      x: x,
      w: w,
      h: h,
      color: color(random(30, 60), random(30, 60), random(20, 40)),
    });
    x += w + random(2, 6);
  }
  drawCity();
}

function drawCity() {
  background(20, 24, 40);
  // ground
  noStroke();
  fill(12);
  rect(0, height * 0.9, width, height * 0.1);
  // buildings
  for (let b of buildings) {
    fill(lerpColor(color(30, 40, 60), color(80, 80, 110), random()));
    rect(b.x, height * 0.9 - b.h, b.w, b.h);
    // windows
    fill(255, 230, 120, 200);
    const cols = floor(b.w / 6);
    const rows = floor(b.h / 12);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (random() < 0.25) continue;
        const wx = b.x + 2 + i * (b.w / cols);
        const wy = height * 0.9 - b.h + 4 + j * (b.h / rows);
        rect(wx, wy, b.w / cols - 4, b.h / rows - 6);
      }
    }
  }
}

function mousePressed() {
  generateCity();
}
