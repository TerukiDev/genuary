// GENUARY DAY 13: Self portrait.
// ÉTOILES RÉGULIÈRES

/* Simple self-portrait composed of circles and ellipses. A few parameters
   vary randomly to produce slight variations while remaining recognizable. */
const NP = 480;
let skin, hair, eye;
function setup() {
  createCanvas(NP, NP);
  noLoop();
  skin = color(245, 205, 170);
  hair = color(random(30, 60), random(20, 30), random(10, 20));
  eye = color(30, 60, 80);
  drawPortrait();
}

function drawPortrait() {
  background(240);
  translate(width / 2, height / 2 - 20);
  // hair
  fill(hair);
  noStroke();
  arc(0, -40, 220, 200, PI, TWO_PI);
  // face
  fill(skin);
  ellipse(0, 0, 180, 220);
  // eyes
  fill(255);
  ellipse(-38, -10, 36, 22);
  ellipse(38, -10, 36, 22);
  fill(eye);
  ellipse(-38, -10, 12, 12);
  ellipse(38, -10, 12, 12);
  // nose
  stroke(150);
  strokeWeight(2);
  noFill();
  beginShape();
  vertex(0, -2);
  vertex(-6, 18);
  vertex(0, 24);
  endShape();
  // mouth
  noStroke();
  fill(180, 60, 80);
  arc(0, 50, 60, 28, 0, PI);
  // hair stray
  stroke(hair);
  strokeWeight(4);
  line(-80, -80, -120, -120);
}
