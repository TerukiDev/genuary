// GENUARY DAY 11: Quine.
// ÉTOILES RÉGULIÈRES

/* A simple JS quine: prints its own source to the console and displays it on canvas. */
let s =
  "let s = %s; console.log(s.replace(/%s/g, JSON.stringify(s))); function setup(){ createCanvas(windowWidth,windowHeight); background(255); fill(0); textSize(12); textAlign(LEFT,TOP); let out = s.replace(/%s/g, JSON.stringify(s)); text(out,10,10,width-20,height-20); noLoop(); } function windowResized(){ resizeCanvas(windowWidth,windowHeight); }";
let out = s.replace(/%s/g, JSON.stringify(s));
console.log(out);

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill(0);
  textSize(12);
  textAlign(LEFT, TOP);
  text(out, 10, 10, width - 20, height - 20);
  noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
