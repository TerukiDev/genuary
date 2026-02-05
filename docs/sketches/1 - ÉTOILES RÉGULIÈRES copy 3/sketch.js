// GENUARY DAY 03: Fibonacci forever.
// ÉTOILES RÉGULIÈRES

/* Draw a Fibonacci spiral made of squares and arcs. */
const NP = 480;
function setup() {
  createCanvas(NP, NP);
  background(255);
  noLoop();
  drawFibonacci(width / 2 - 80, height / 2 - 80, 10);
}

function drawFibonacci(x0, y0, n) {
  // compute first n fibonacci numbers
  let fib = [1, 1];
  for (let i = 2; i < n; i++) fib[i] = fib[i - 1] + fib[i - 2];

  push();
  translate(width / 2, height / 2);
  let x = 0,
    y = 0,
    dir = 0; // 0:right,1:down,2:left,3:up
  stroke(30);
  noFill();
  for (let i = 0; i < n; i++) {
    let s = fib[i] * 8; // scale factor
    // draw square
    rect(x, y, s, s);
    // draw quarter arc
    push();
    translate(x + s / 2, y + s / 2);
    let start = dir * HALF_PI;
    arc(0, 0, s * 2, s * 2, start, start + HALF_PI);
    pop();
    // advance
    if (dir == 0) x += s;
    else if (dir == 1) y += s;
    else if (dir == 2) x -= s;
    else y -= s;
    dir = (dir + 1) % 4;
  }
  pop();
}

/* original logic preserved below */
