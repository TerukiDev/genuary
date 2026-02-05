// GENUARY DAY 24: Perfectionist’s nightmare.
// ÉTOILES RÉGULIÈRES

/* A near-perfect grid with tiny, intentional imperfections: shifted lines,
   off-by-one rectangles, misaligned strokes — a perfectionist's nightmare. */
const NP = 480;
function setup() {
  createCanvas(NP, NP);
  noLoop();
  drawNightmare();
}

function drawNightmare() {
  background(255);
  const cols = 10;
  const rows = 10;
  const w = (width - 80) / cols;
  const h = (height - 80) / rows;
  translate(40, 40);
  stroke(20);
  for (let r = 0; r <= rows; r++) {
    let y = r * h + random(-1, 1);
    line(0, y, cols * w + random(-1, 1), y + random(-1, 1));
  }
  for (let c = 0; c <= cols; c++) {
    let x = c * w + random(-1, 1);
    line(x, 0 + random(-1, 1), x + random(-1, 1), rows * h + random(-1, 1));
  }
  // draw rectangles mostly aligned but slightly off
  noFill();
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let x = c * w + random(-2, 2);
      let y = r * h + random(-2, 2);
      rect(
        x + 4,
        y + 4,
        w - 8 + (random() < 0.02 ? 1 : 0),
        h - 8 + (random() < 0.02 ? -1 : 0),
      );
    }
  }
}
