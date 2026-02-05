// GENUARY DAY 05: Write “Genuary”. Avoid using a font.
// ÉTOILES RÉGULIÈRES

/* Draw the word GENUARY using simple geometric strokes (no font). */
const NP = 480;
function setup() {
  createCanvas(NP, NP);
  noLoop();
  background(255);
  drawGenuary();
}

function drawGenuary() {
  push();
  translate(40, height / 2 - 80);
  stroke(10);
  strokeWeight(18);
  noFill();
  // G
  arc(0, 0, 120, 160, -PI / 2, PI / 2);
  line(0, 40, 30, 40);
  // E
  translate(140, 0);
  line(0, -80, 0, 80);
  line(0, -80, 70, -80);
  line(0, 0, 60, 0);
  line(0, 80, 70, 80);
  // N
  translate(120, 0);
  line(0, 80, 0, -80);
  line(0, -80, 70, 80);
  line(70, 80, 70, -80);
  // U
  translate(120, 0);
  arc(35, 0, 70, 160, 0, PI);
  // A
  translate(110, 0);
  line(0, 80, 35, -80);
  line(70, 80, 35, -80);
  line(15, 0, 55, 0);
  // R
  translate(110, 0);
  line(0, 80, 0, -80);
  arc(40, -30, 80, 80, -PI / 2, PI / 2);
  line(0, 0, 70, 80);
  // Y
  translate(140, 0);
  line(0, -80, 35, 0);
  line(70, -80, 35, 0);
  line(35, 0, 35, 80);
  pop();
}

/* original logic preserved below */
