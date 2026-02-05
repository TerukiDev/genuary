// GENUARY DAY 15: Create an invisible object where only the shadows can be seen.
// ÉTOILES RÉGULIÈRES

/* Render only shadows cast by an invisible object (no object outline). Click
   to move the light source. */
const NP = 480;
let lightX, lightY;
function setup() {
  createCanvas(NP, NP);
  lightX = width / 3;
  lightY = height / 4;
  noLoop();
  drawScene();
}

function drawScene() {
  background(245);
  // ground
  noStroke();
  fill(230);
  rect(0, height * 0.75, width, height * 0.25);
  // shadow of invisible sphere
  drawShadow(lightX, lightY, width / 2, height * 0.6, 120);
  // small shadow for an invisible box
  drawShadow(lightX, lightY, width / 2 - 120, height * 0.7, 60);
}

function drawShadow(lx, ly, ox, oy, size) {
  // vector from light to object
  let dx = ox - lx;
  let dy = oy - ly;
  let dist = sqrt(dx * dx + dy * dy);
  let sx = ox + (dx / dist) * size * 0.8;
  let sy = oy + (dy / dist) * size * 0.8;
  push();
  translate(sx, sy);
  noStroke();
  fill(0, 120);
  ellipse(0, 0, size * 1.6, size * 0.6);
  pop();
}

function mousePressed() {
  lightX = mouseX;
  lightY = mouseY;
  redraw();
}
