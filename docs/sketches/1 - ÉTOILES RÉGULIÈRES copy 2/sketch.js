// GENUARY DAY 02: Twelve principles of animation.
// ÉTOILES RÉGULIÈRES

/*
 Animated demo inspired by the 12 principles: a single ball cycles through
 twelve subtle motion variations (timing, easing, squash/stretch, anticipation).
 Click to pause/resume.
*/

const NP = 480;
let paused = false;
function setup() {
  createCanvas(NP, NP);
  noStroke();
}

function draw() {
  if (paused) return;
  background(250);
  translate(width / 2, height / 2);
  let t = (frameCount / 60) % 12; // cycle through 12 modes
  let mode = floor(t);
  let p = t - mode;

  // base position oscillation
  let x = lerp(-120, 120, easeInOutCubic(p));
  // apply per-mode tweaks
  let sx = 1,
    sy = 1,
    rot = 0;
  switch (mode) {
    case 0: // anticipation
      x = lerp(-160, 0, easeOutBack(p));
      break;
    case 1: // squash & stretch
      sx = 1 + 0.6 * sin(p * PI);
      sy = 1 - 0.4 * sin(p * PI);
      break;
    case 2: // follow-through (trail)
      for (let i = 0; i < 6; i++) {
        fill(30, 30, 30, 40 - i * 6);
        ellipse(x - i * 8, 0, 48 - i * 6, 48 - i * 6);
      }
      break;
    case 3: // overlapping action
      x *= 1 - 0.5 * p;
      break;
    case 4: // slow in / slow out
      x = lerp(-120, 120, easeInOutQuad(p));
      break;
    case 5: // arcs
      x = 120 * cos(p * PI);
      break;
    case 6: // timing (snappy)
      x = p < 0.5 ? -120 : 120;
      break;
    case 7: // exaggeration
      sx = 1 + 1.2 * sin(p * PI);
      sy = 1 - 0.8 * sin(p * PI);
      break;
    case 8: // staging (clear silhouette)
      // draw a shadow first
      fill(0, 20);
      ellipse(x + 10, 20, 72, 20);
      break;
    case 9: // appeal (nice color/shape)
      rot = sin(p * TWO_PI) * 0.2;
      break;
    case 10: // anticipation 2
      x = lerp(120, -120, easeInCubic(p));
      break;
    case 11: // pose to pose
      x = lerp(-120, 120, p < 0.5 ? p * 0.5 : 0.5 + (p - 0.5) * 0.5);
      break;
  }

  push();
  rotate(rot);
  fill("#ff6b6b");
  push();
  scale(sx, sy);
  ellipse(x / sx, 0 / sy, 64, 64);
  pop();
  pop();

  // subtle mode label (optional)
  fill(10);
  textAlign(CENTER, TOP);
  textSize(12);
  text("12 Principles — mode " + (mode + 1), 0, height / 2 - 24 - 8);
}

function mousePressed() {
  paused = !paused;
}

// easing helpers
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - pow(-2 * t + 2, 3) / 2;
}
function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - pow(-2 * t + 2, 2) / 2;
}
function easeOutBack(t) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * pow(t - 1, 3) + c1 * pow(t - 1, 2);
}
function easeInCubic(t) {
  return t * t * t;
}

/* original logic preserved below */
