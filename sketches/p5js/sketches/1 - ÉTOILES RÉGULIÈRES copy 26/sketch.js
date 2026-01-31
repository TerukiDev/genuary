// GENUARY DAY 26: Recursive Grids
// Subdivide rectangles recursively to form grid-like compositions

function setup() {
  createCanvas(480, 480);
  noLoop();
  draw();
}

function draw() {
  background(245);
  stroke(20);
  noFill();
  const margin = 20;
  subdivide(margin, margin, width - margin * 2, height - margin * 2, 4);
}

function subdivide(x, y, w, h, depth) {
  strokeWeight(map(depth, 1, 6, 2, 0.3));
  rect(x, y, w, h);
  if (depth <= 0) return;
  const nx = int(random(2, 4));
  const ny = int(random(2, 4));
  const cw = w / nx;
  const ch = h / ny;
  for (let i = 0; i < nx; i++) {
    for (let j = 0; j < ny; j++) {
      const nxp = x + i * cw + random(-cw * 0.08, cw * 0.08);
      const nyp = y + j * ch + random(-ch * 0.08, ch * 0.08);
      if (random() < 0.6) {
        subdivide(nxp, nyp, cw, ch, depth - 1);
      } else {
        push();
        translate(nxp + cw / 2, nyp + ch / 2);
        rotate(random(-0.2, 0.2));
        noStroke();
        fill(30 + depth * 15, 100, 200 - depth * 10, 140);
        rectMode(CENTER);
        rect(0, 0, cw * 0.9, ch * 0.9);
        pop();
      }
    }
  }
}
