// GENUARY DAY 22: Pen plotter ready.
// ÉTOILES RÉGULIÈRES

/* Pen-plotter style: thin black strokes, no fills, continuous-ish paths. Click
   to randomize a new set of curves. */
const NP = 480;
let paths = [];

function setup() {
  createCanvas(NP, NP);
  stroke(0);
  strokeWeight(0.8);
  noFill();
  generatePaths();
}

function generatePaths() {
  paths = [];
  for (let p = 0; p < 6; p++) {
    let pts = [];
    let cx = random(width * 0.2, width * 0.8);
    let cy = random(height * 0.2, height * 0.8);
    let r = random(40, 180);
    for (let a = 0; a < TWO_PI; a += random(0.2, 0.6)) {
      let x = cx + cos(a + p * 0.3) * (r * (0.5 + 0.5 * noise(a * 2 + p)));
      let y = cy + sin(a + p * 0.3) * (r * (0.5 + 0.5 * noise(a * 3 + p)));
      pts.push([x, y]);
    }
    paths.push(pts);
  }
  redraw();
}

function draw() {
  background(255);
  for (let pts of paths) {
    beginShape();
    for (let [x, y] of pts) vertex(x, y);
    endShape();
  }
}

function mousePressed() {
  generatePaths();
}
