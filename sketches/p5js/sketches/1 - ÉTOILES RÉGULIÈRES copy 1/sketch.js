// GENUARY DAY 01: One color, one shape.
// ÉTOILES RÉGULIÈRES

/*
 Simple p5 sketch: one color, one shape (static).
 This replaces the visual output with a single filled circle.
*/

const NP = 480;
function setup() {
  createCanvas(NP, NP);
  noLoop();
  background(255);
  noStroke();
  fill("#1a73e8"); // single color
  ellipse(width / 2, height / 2, NP * 0.6, NP * 0.6); // single shape
}

// Original generation logic preserved below for reference.
/*
// ----------------------------------------------------
let DESSIN = 7; // [7,8,9,10,11,12]

// ----------------------------------------------------
let NP_ORIG=480, PI = Math.PI;
let K=5,H=3,CX=NP_ORIG/2,CY=NP_ORIG/2,R=NP_ORIG*.45,AD=PI/2;

if (DESSIN==8)  
  K=7;
else if (DESSIN==9)  
  K=20,H=9;
else if (DESSIN==10)  
  K=20,H=7;
else if (DESSIN==11)  
  K=51,H=20;
else if (DESSIN==12)  
  K=51,H=25;

// ----------------------------------------------------
function original_setup() 
{
  INIT();
  
  for (let I = 0; I < K; I++) {
    let X = int(CX+R*cos(2*I*H*PI/K+AD));
    let Y = int(CY+R*sin(2*I*H*PI/K+AD));
    if (I == 0) LPRINT(`M${X},${Y}`);
    if (I > 0) LPRINT(`D${X},${Y}`);
  }
  
  TRACE();
}
*/
