// GENUARY DAY 18: Unexpected path.
// ÉTOILES RÉGULIÈRES

/* Draw a route that changes direction based on one simple rule:
   if current point is in quadrant 1 or 3, turn right; else turn left. */
const NP = 480;
function setup() {
  createCanvas(NP, NP);
  noLoop();
  drawPath();
}

function drawPath() {
  background(255);
  translate(width / 2, height / 2);
  stroke(20);
  noFill();
  let x = 0,
    y = 0;
  let angle = 0;
  beginShape();
  vertex(x, y);
  for (let i = 0; i < 600; i++) {
    // simple rule: quadrant-based turn
    let quad = (x >= 0 ? 1 : 0) + (y >= 0 ? 2 : 0); // 0..3
    if (quad === 0 || quad === 3)
      angle += PI / 6; // turn right
    else angle -= PI / 5; // turn left
    let step = 6 + 2 * sin(i * 0.1);
    x += cos(angle) * step;
    y += sin(angle) * step;
    vertex(x, y);
    // occasionally random perturbation
    if (i % 37 === 0) angle += random(-0.5, 0.5);
  }
  endShape();
}
