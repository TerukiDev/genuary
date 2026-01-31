// GENUARY DAY 07: Boolean algebra.
// ÉTOILES RÉGULIÈRES

/*
 Interactive boolean grid: two layers A and B of bits. The result C
 is computed per-cell using the selected operator (AND/OR/XOR). Click to
 toggle A (shift+click toggles B). Press `o` to cycle the operator.
*/

const NP = 480;
const COLS = 16;
const ROWS = 16;
let A = [];
let B = [];
let opIndex = 0;
const OPS = ["AND", "OR", "XOR"];

function setup() {
  createCanvas(NP, NP);
  initGrids();
  noStroke();
}

function initGrids() {
  A = new Array(ROWS).fill(0).map(() => new Array(COLS).fill(0));
  B = new Array(ROWS).fill(0).map(() => new Array(COLS).fill(0));
  // random seed pattern
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++) {
      A[r][c] = random() < 0.35 ? 1 : 0;
      B[r][c] = random() < 0.35 ? 1 : 0;
    }
}

function draw() {
  background(240);
  const w = width / COLS;
  const h = height / ROWS;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const ax = A[r][c];
      const bx = B[r][c];
      // left half: A
      fill(ax ? 20 : 250);
      rect(c * w * 0.33, r * h * 0.33, w * 0.33 + 1, h * 0.33 + 1);
      // middle: B
      fill(bx ? 20 : 250);
      rect(c * w * 0.33 + w * 0.33, r * h * 0.33, w * 0.33 + 1, h * 0.33 + 1);
      // right: result
      const res = applyOp(ax, bx, OPS[opIndex]);
      fill(res ? "#1a73e8" : 250);
      rect(
        c * w * 0.33 + 2 * w * 0.33,
        r * h * 0.33,
        w * 0.33 + 1,
        h * 0.33 + 1,
      );
    }
  }

  // UI labels
  fill(10);
  textSize(12);
  textAlign(LEFT, TOP);
  text("A (left) — B (middle) — Result (right)", 6, 6);
  text("Operator: " + OPS[opIndex] + " (press o to cycle)", 6, 24);
  text("Click cell to toggle A, Shift+Click toggles B", 6, 42);
}

function applyOp(a, b, op) {
  if (op === "AND") return a & b;
  if (op === "OR") return a | b;
  if (op === "XOR") return a ^ b;
  return 0;
}

function mousePressed() {
  const w = width / COLS;
  const h = height / ROWS;
  const c = floor(mouseX / w);
  const r = floor(mouseY / h);
  if (r >= 0 && r < ROWS && c >= 0 && c < COLS) {
    if (keyIsDown(SHIFT)) B[r][c] = B[r][c] ? 0 : 1;
    else A[r][c] = A[r][c] ? 0 : 1;
  }
}

function keyPressed() {
  if (key === "o" || key === "O") opIndex = (opIndex + 1) % OPS.length;
  if (key === "r" || key === "R") initGrids();
}
