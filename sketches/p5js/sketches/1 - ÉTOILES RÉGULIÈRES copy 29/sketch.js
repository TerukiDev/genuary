// GENUARY DAY 29: Genetic evolution and mutation
// Minimal population with selection+mutation on keypress

let population = [];
const POP = 24;

function setup() {
  createCanvas(480, 480);
  noLoop();
  resetPop();
  redraw();
}

function resetPop() {
  population = [];
  for (let i = 0; i < POP; i++) population.push(randomGenome());
}

function randomGenome() {
  // genome: set of circles {x,y,r,h}
  const genes = [];
  const n = int(random(3, 10));
  for (let i = 0; i < n; i++)
    genes.push({
      x: random(width),
      y: random(height),
      r: random(6, 60),
      h: random(360),
    });
  return genes;
}

function drawGenome(g, ox, oy, sw, sh) {
  push();
  translate(ox, oy);
  scale(sw / width, sh / height);
  noStroke();
  for (let c of g) {
    fill(c.h, 70, 70, 70);
    ellipse(c.x, c.y, c.r);
  }
  pop();
}

function fitness(g) {
  // prefer larger coverage with some diversity
  let area = 0;
  for (let c of g) area += PI * sq(c.r / 2);
  return area + random(-1000, 1000);
}

function keyPressed() {
  if (key === "r") {
    resetPop();
    redraw();
  } else if (key === "e") {
    // evolve one generation: select top half, reproduce
    population.sort((a, b) => fitness(b) - fitness(a));
    const survivors = population.slice(0, POP / 2);
    const kids = [];
    while (survivors.length + kids.length < POP) {
      const p = random(survivors);
      const child = p.map((c) => ({
        x: constrain(c.x + random(-20, 20), 0, width),
        y: constrain(c.y + random(-20, 20), 0, height),
        r: max(2, c.r + random(-8, 8)),
        h: (c.h + random(-30, 30) + 360) % 360,
      }));
      kids.push(child);
    }
    population = survivors.concat(kids);
    redraw();
  }
}

function draw() {
  background(252);
  colorMode(HSB, 360, 100, 100, 100);
  const cols = 6;
  const rows = ceil(population.length / cols);
  const w = width / cols;
  const h = height / rows;
  for (let i = 0; i < population.length; i++) {
    const gx = (i % cols) * w;
    const gy = floor(i / cols) * h;
    drawGenome(population[i], gx, gy, w, h);
  }
}

function mousePressed() {
  // show fitness of clicked genome in console
  const cols = 6;
  const w = width / cols;
  const idx =
    floor(mouseX / w) +
    floor(mouseY / (height / ceil(population.length / cols))) * cols;
  if (population[idx]) console.log("fitness:", fitness(population[idx]));
}
