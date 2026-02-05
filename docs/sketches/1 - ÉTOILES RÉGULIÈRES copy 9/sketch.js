// GENUARY DAY 09: Crazy automaton.
// ÉTOILES RÉGULIÈRES

/* 2D cellular automaton with randomized rule parameters.
   Click to randomize rules; space to pause. */
const NP = 480;
const COLS = 80;
const ROWS = 80;
let grid = [];
let nextGrid = [];
let birth = [];
let survive = [];
let paused = false;

function setup() {
  createCanvas(NP, NP);
  initAutomaton();
  frameRate(30);
}

function initAutomaton() {
  grid = new Array(ROWS).fill(0).map(() => new Array(COLS).fill(0));
  nextGrid = new Array(ROWS).fill(0).map(() => new Array(COLS).fill(0));
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++) grid[r][c] = random() < 0.25 ? 1 : 0;
  // random rule: pick random birth and survive neighbor counts
  birth = [];
  survive = [];
  for (let i = 0; i < 9; i++) {
    if (random() < 0.35) birth.push(i);
    if (random() < 0.5) survive.push(i);
  }
}

function draw() {
  background(10);
  const w = width / COLS;
  const h = height / ROWS;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      fill(grid[r][c] ? "#ffdd57" : "#0b0b0b");
      rect(c * w, r * h, w + 0.5, h + 0.5);
    }
  }
  if (!paused) stepAutomaton();
  // rule overlay
  fill(255);
  textSize(10);
  textAlign(LEFT, TOP);
  text("Birth: " + birth.join(",") + "  Survive: " + survive.join(","), 6, 6);
  text("Click to randomize rules, space to pause", 6, 20);
}

function stepAutomaton() {
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      let n = countNeighbors(r, c);
      if (grid[r][c] == 1) nextGrid[r][c] = survive.includes(n) ? 1 : 0;
      else nextGrid[r][c] = birth.includes(n) ? 1 : 0;
    }
  }
  // swap
  let tmp = grid;
  grid = nextGrid;
  nextGrid = tmp;
}

function countNeighbors(r, c) {
  let s = 0;
  for (let dr = -1; dr <= 1; dr++)
    for (let dc = -1; dc <= 1; dc++) {
      if (dr == 0 && dc == 0) continue;
      const rr = (r + dr + ROWS) % ROWS;
      const cc = (c + dc + COLS) % COLS;
      s += grid[rr][cc];
    }
  return s;
}

function mousePressed() {
  initAutomaton();
}

function keyPressed() {
  if (key === " ") paused = !paused;
}
