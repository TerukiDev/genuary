// GENUARY DAY 21: Bauhaus Poster.
// ÉTOILES RÉGULIÈRES

/* Minimal Bauhaus-inspired poster: strong geometry, primary colors, asymmetry. */
const NP = 480;
function setup() {
  createCanvas(NP, NP);
  noLoop();
  background(245);
  drawBauhaus();
}

function drawBauhaus() {
  // palette
  const red = "#e63946";
  const blue = "#1d3557";
  const yellow = "#ffd166";
  // large rectangle
  noStroke();
  fill(blue);
  rect(0, 0, width * 0.6, height * 0.6);
  // circle
  fill(red);
  ellipse(width * 0.7, height * 0.35, 180, 180);
  // small rectangle
  fill(yellow);
  rect(width * 0.1, height * 0.7, width * 0.7, 60);
  // black lines
  stroke(10);
  strokeWeight(6);
  line(40, height - 40, width - 40, 40);
  // title (geometric bar instead of text)
  noStroke();
  fill(10);
  rect(40, height - 20, 120, 10);
}
