// GENUARY DAY 30: It's not a bug, it's a feature
// Intentional 'glitch' offsets become a compositional device

let cols = 12;
function setup() {
  createCanvas(480, 480);
  noLoop();
  draw();
}

function draw() {
  background(248);
  stroke(34);
  noFill();
  const w = width / cols;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < cols; j++) {
      const x = i * w + w * 0.1;
      const y = j * w + w * 0.1;
      push();
      // the 'bug' — integer truncation and bitwise ops produce offsets
      const glitch = ((i << 1) ^ j) % 7;
      translate(x + glitch, y + (glitch & 3));
      rotate((i * j) % 5 === 0 ? (PI / 180) * (glitch * 6) : 0);
      if ((i * j) % 11 === 0) {
        // a 'feature' — deliberate larger shape
        rect(0, 0, w * 0.9 + glitch, w * 0.9 - (glitch & 1));
      } else {
        rect(0, 0, w * 0.85, w * 0.85);
      }
      pop();
    }
  }
}

function mousePressed() {
  // change cols to change the 'bug pattern'
  cols = cols === 12 ? 8 : 12;
  redraw();
}
