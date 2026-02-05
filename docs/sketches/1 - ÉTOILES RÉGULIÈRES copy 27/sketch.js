// GENUARY DAY 27: Lifeform
// A small population of simple agents that move and reproduce

let agents = [];

function setup() {
  createCanvas(480, 480);
  colorMode(HSB, 360, 100, 100, 100);
  for (let i = 0; i < 12; i++) agents.push(new Agent(width / 2, height / 2));
}

function draw() {
  background(0, 0, 95, 6);
  for (let a of agents) a.step();
  // keep population bounded
  if (agents.length > 300) agents.splice(0, agents.length - 300);
}

class Agent {
  constructor(x, y) {
    this.pos = createVector(x + random(-10, 10), y + random(-10, 10));
    this.v = p5.Vector.random2D().mult(random(0.3, 1.2));
    this.size = random(2, 8);
    this.h = random(0, 360);
    this.age = 0;
  }
  step() {
    const t = millis() * 0.0002;
    const n = noise(this.pos.x * 0.003 + t, this.pos.y * 0.003 - t);
    const ang = TAU * n;
    this.v.add(p5.Vector.fromAngle(ang).mult(0.05));
    this.v.limit(2);
    this.pos.add(this.v);
    this.age++;
    fill(this.h, 60, 90, 45);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size);
    if (random() < 0.002 + this.age * 0.00002) {
      // reproduce with mutation
      const c = new Agent(this.pos.x, this.pos.y);
      c.v = this.v.copy().rotate(random(-0.6, 0.6));
      c.size = max(1, this.size + random(-1, 1));
      c.h = (this.h + random(-20, 20) + 360) % 360;
      agents.push(c);
    }
    if (
      this.pos.x < -20 ||
      this.pos.x > width + 20 ||
      this.pos.y < -20 ||
      this.pos.y > height + 20
    ) {
      // move back toward center
      this.v.add(
        p5.Vector.sub(createVector(width / 2, height / 2), this.pos).mult(
          0.002,
        ),
      );
    }
  }
}

function mousePressed() {
  // add a burst
  for (let i = 0; i < 20; i++) agents.push(new Agent(mouseX, mouseY));
}
