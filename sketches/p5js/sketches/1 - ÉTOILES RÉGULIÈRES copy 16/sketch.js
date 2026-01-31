// GENUARY DAY 16: Order and disorder.
// ÉTOILES RÉGULIÈRES

/* Left half is an ordered grid; right half is the same grid but randomized.
   Visual comparison of order vs disorder. */
const NP = 480;
function setup() {
  createCanvas(NP, NP);
  noLoop();
  drawSplit();
}

function drawSplit() {
  background(250);
  const cols = 12;
  const rows = 12;
  const w = width / (cols * 2); // half for left, half for right
  const h = height / rows;
  // left - ordered
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let x = c * w + 10;
      let y = r * h + 10;
      fill(30);
      rect(x, y, w - 6, h - 6);
    }
  }
  // right - disorder (same cells but jittered)
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let x = width / 2 + c * w + 10 + random(-w * 0.6, w * 0.6);
      let y = r * h + 10 + random(-h * 0.6, h * 0.6);
      fill(30);
      rect(x, y, w - 6, h - 6);
    }
  }
  // divider
  stroke(120);
  line(width / 2, 0, width / 2, height);
}
