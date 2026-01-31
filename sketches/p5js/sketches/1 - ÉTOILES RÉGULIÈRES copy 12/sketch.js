// GENUARY DAY 12: Boxes only.
// ÉTOILES RÉGULIÈRES

/* A composition built only from rectangles. */
const NP = 480;
function setup() {
  createCanvas(NP, NP);
  noLoop();
  background(255);
  drawBoxes();
}

function drawBoxes() {
  rectMode(CENTER);
  noFill();
  stroke(20);
  let layers = 18;
  for (let i = 0; i < layers; i++) {
    push();
    translate(width / 2, height / 2);
    rotate(i * 0.08);
    let w = width * (1 - i / layers) * 0.9;
    let h = height * (1 - i / layers) * 0.9;
    strokeWeight(1 + i * 0.6);
    rect(0, 0, w, h);
    pop();
  }
  // grid of small boxes
  for (let y = 40; y < height - 40; y += 28) {
    for (let x = 40; x < width - 40; x += 28) {
      if (random() < 0.5) continue;
      push();
      translate(x, y);
      rotate((x + y) * 0.001);
      rect(0, 0, 16, 16);
      pop();
    }
  }
}
