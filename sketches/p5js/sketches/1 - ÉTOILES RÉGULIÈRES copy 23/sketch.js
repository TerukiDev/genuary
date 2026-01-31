// GENUARY DAY 23: Transparency.
// ÉTOILES RÉGULIÈRES

/* Explore transparency with overlapping translucent shapes and blend modes. */
const NP = 480;
function setup() {
  createCanvas(NP, NP);
  noLoop();
  drawTransparency();
}

function drawTransparency() {
  background(255);
  noStroke();
  blendMode(BLEND);
  const cols = 6;
  const rows = 6;
  const w = width / cols;
  const h = height / rows;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * w + w / 2;
      let y = j * h + h / 2;
      fill(255, 0, 0, 120);
      ellipse(x - 20, y - 10, w * 0.9, h * 0.9);
      fill(0, 100, 200, 120);
      ellipse(x + 20, y + 10, w * 0.9, h * 0.9);
      fill(60, 200, 80, 120);
      rect(x - w * 0.3, y - h * 0.3, w * 0.6, h * 0.6);
    }
  }
  blendMode(BLEND);
}
