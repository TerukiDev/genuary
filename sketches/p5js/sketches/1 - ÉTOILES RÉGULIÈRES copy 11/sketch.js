// GENUARY DAY 11: Quine.
// ÉTOILES RÉGULIÈRES

/* A simple JS quine: prints its own source to the console and displays it on canvas. */
let s =
  "let s = %s; console.log(s.replace('%s', JSON.stringify(s))); function setup(){ createCanvas(480,480); background(255); fill(0); textSize(10); textAlign(LEFT,TOP); let out = s.replace('%s', JSON.stringify(s)); text(out,10,10,width-20,height-20); noLoop(); }";
let out = s.replace("%s", JSON.stringify(s));
console.log(out);

function setup() {
  createCanvas(480, 480);
  background(255);
  fill(0);
  textSize(10);
  textAlign(LEFT, TOP);
  text(out, 10, 10, width - 20, height - 20);
  noLoop();
}
