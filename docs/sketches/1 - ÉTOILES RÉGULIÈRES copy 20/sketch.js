// GENUARY DAY 20: One line.
// ÉTOILES RÉGULIÈRES

/* Single continuous line drawn across the canvas. Uses a noise-driven
   path to create an elegant single-stroke artwork. */
const NP = 480;
function setup() {
  createCanvas(NP, NP);
  background(255);
  stroke(20);
  strokeWeight(2);
  noFill();
  beginShape();
  let x = 20,
    y = height / 2;
  vertex(x, y);
  let angle = 0;
  for (let i = 0; i < 1200; i++) {
    angle += map(noise(i * 0.01), 0, 1, -0.6, 0.6);
    let step = 2 + noise(i * 0.02) * 4;
    x += cos(angle) * step;
    y += sin(angle) * step;
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
    vertex(x, y);
  }
  endShape();
  noLoop();
}
