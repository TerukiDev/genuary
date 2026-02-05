// GENUARY DAY 04: Lowres.
// ÉTOILES RÉGULIÈRES

/* Draw a low-resolution, pixelated composition. */
const NP = 480;
function setup() {
  createCanvas(NP, NP);
  noLoop();
  drawLowRes();
}

function drawLowRes() {
  const cols = 16;
  const rows = 16;
  const w = width / cols;
  const h = height / rows;
  colorMode(HSB, 360, 100, 100);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let hue = map(i, 0, cols - 1, 0, 360);
      let bri = map(j, 0, rows - 1, 50, 100);
      fill(hue, 80, bri);
      noStroke();
      rect(i * w, j * h, w + 1, h + 1);
    }
  }
  colorMode(RGB);
}

/* original logic preserved below */
