// GENUARY DAY 06: Lights on/off.
// ÉTOILES RÉGULIÈRES

/* Toggle a simple scene between 'lights on' and 'lights off' with mouse click. */
const NP = 480;
let lightsOn = true;
function setup() {
  createCanvas(NP, NP);
}

function draw() {
  if (lightsOn) {
    background(240, 240, 220);
    // a lamp
    fill(255, 240, 160);
    noStroke();
    ellipse(width / 2, height / 2 - 20, 200, 200);
    fill(200);
    rect(width / 2 - 80, height / 2 + 60, 160, 20);
  } else {
    background(20);
    // subtle glow
    noStroke();
    fill(60, 60, 60, 50);
    ellipse(width / 2, height / 2 - 20, 200, 200);
    // lamp silhouette
    fill(40);
    rect(width / 2 - 80, height / 2 + 60, 160, 20);
  }
  // instruction
  fill(lightsOn ? 10 : 240);
  textAlign(CENTER, BOTTOM);
  textSize(12);
  text("Click to toggle lights", width / 2, height - 10);
}

function mousePressed() {
  lightsOn = !lightsOn;
}

/* original logic preserved below */
