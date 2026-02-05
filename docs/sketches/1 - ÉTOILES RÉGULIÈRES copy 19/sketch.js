// GENUARY DAY 19: 16x16.
// ÉTOILES RÉGULIÈRES

/* 16x16 pixel composition enlarged to canvas */
const NP = 480;
const SIZE = 16;
let pixels = [];

function setup() {
  createCanvas(NP, NP);
  noLoop();
  // generate a simple pattern using symmetry
  for (let y = 0; y < SIZE; y++) {
    pixels[y] = [];
    for (let x = 0; x < SIZE; x++) {
      let v =
        noise(x * 0.3, y * 0.3) > 0.5
          ? color(random(30, 200), random(30, 200), random(30, 200))
          : color(240);
      pixels[y][x] = v;
    }
  }
  draw16();
}

function draw16() {
  const w = width / SIZE;
  const h = height / SIZE;
  noStroke();
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      fill(pixels[y][x]);
      rect(x * w, y * h, w + 1, h + 1);
    }
  }
}
