// GENUARY DAY 10: Polar coordinates.
// ÉTOILES RÉGULIÈRES

/* Draws multiple polar/rose curves and radial patterns. Click to randomize. */
const NP = 480;
let palette = ["#1a73e8", "#ff6b6b", "#ffd166", "#06d6a0", "#8338ec"];

function setup() {
  createCanvas(NP, NP);
  noFill();
  drawPolar();
}

function drawPolar() {
  background(255);
  translate(width / 2, height / 2);
  strokeWeight(1.2);
  for (let i = 1; i <= 5; i++) {
    stroke(palette[(i - 1) % palette.length]);
    beginShape();
    let k = i * 2 - 1; // rose parameter
    for (let a = 0; a <= TWO_PI; a += 0.01) {
      let r = 140 * cos(k * a) + 20 * sin(a * 3 + i);
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
    }
    endShape(CLOSE);
  }
  // radial dots
  stroke("#222");
  for (let a = 0; a < TWO_PI; a += PI / 24) {
    let r = 170;
    let x = r * cos(a);
    let y = r * sin(a);
    point(x, y);
  }
}

function mousePressed() {
  // shuffle palette slightly and redraw
  palette = shuffle(palette);
  drawPolar();
}
