// GENUARY DAY 14: Everything fits perfectly.
// ÉTOILES RÉGULIÈRES

/* Draws a packing of rectangles and circles that tile the canvas
   so shapes fit without gaps in a simple grid-based packing. */
const NP = 480;
function setup() {
  createCanvas(NP, NP);
  noLoop();
  drawPacking();
}

function drawPacking() {
  background(250);
  const cols = 6;
  const rows = 6;
  const w = width / cols;
  const h = height / rows;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * w;
      let y = j * h;
      if ((i + j) % 2 === 0) {
        fill(30, 120, 180);
        rect(x, y, w, h);
      } else {
        fill(240);
        rect(x, y, w, h);
        fill(220, 40, 80);
        ellipse(x + w / 2, y + h / 2, min(w, h) * 0.8, min(w, h) * 0.8);
      }
    }
  }
  // Add precise border lines so everything visually fits.
  stroke(10);
  noFill();
  strokeWeight(2);
  rect(0, 0, width, height);
}
