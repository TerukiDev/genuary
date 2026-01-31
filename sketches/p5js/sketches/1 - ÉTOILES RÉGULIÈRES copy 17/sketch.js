// GENUARY DAY 17: Wallpaper group.
// ÉTOILES RÉGULIÈRES

/* Create a simple repeating motif and tile it with reflections to suggest
   a wallpaper symmetry (p2mm-like tiling). Click to randomize motif color. */
const NP = 480;
let motifColor;
function setup() {
  createCanvas(NP, NP);
  noLoop();
  motifColor = color(30, 120, 180);
  drawWallpaper();
}

function drawWallpaper() {
  background(250);
  const tile = 120;
  for (let y = 0; y < height; y += tile) {
    for (let x = 0; x < width; x += tile) {
      push();
      translate(x + tile / 2, y + tile / 2);
      // alternate reflections
      if ((x / tile + y / tile) % 2 === 0) scale(1, 1);
      else scale(-1, 1);
      drawMotif(0, 0, tile, motifColor);
      pop();
    }
  }
}

function drawMotif(cx, cy, s, col) {
  noStroke();
  fill(col);
  ellipse(cx, cy - s * 0.12, s * 0.5, s * 0.5);
  fill(255);
  rect(cx - s * 0.2, cy, s * 0.4, s * 0.4, 6);
  // small details
  fill(20);
  ellipse(cx - s * 0.18, cy - s * 0.25, s * 0.07, s * 0.07);
}

function mousePressed() {
  motifColor = color(random(30, 200), random(20, 180), random(20, 200));
  drawWallpaper();
}
