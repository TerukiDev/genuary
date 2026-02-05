// GENUARY DAY 25: Organic Geometry
// Minimal p5 sketch: procedural organic blobs using Perlin noise

let seeds = [];
function setup() {
  createCanvas(480, 480);
  noLoop();
  build();
}

function build() {
  seeds = [];
  for (let i = 0; i < 6; i++) seeds.push(random(1000));
  redraw();
}

function draw() {
  background(252);
  noStroke();
  translate(width / 2, height / 2);
  for (let s = 0; s < seeds.length; s++) {
    const seed = seeds[s];
    push();
    rotate((TWO_PI / seeds.length) * s);
    fill(20 + s * 30, 120, 220 - s * 20, 180);
    drawBlob(seed, 0, 0, 140 - s * 10);
    pop();
  }
}

function drawBlob(seed, cx, cy, r) {
  beginShape();
  const detail = 160;
  for (let i = 0; i < detail; i++) {
    const a = map(i, 0, detail, 0, TWO_PI);
    const n = noise(cos(a) * 0.8 + seed, sin(a) * 0.8 + seed);
    const rad = r * map(n, 0, 1, 0.6, 1.25);
    const x = cx + rad * cos(a);
    const y = cy + rad * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
}

function mousePressed() {
  build();
}
