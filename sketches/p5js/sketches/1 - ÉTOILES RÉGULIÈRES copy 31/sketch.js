// GENUARY DAY 31: GLSL / shader day
// Uses p5 WEBGL and an inline fragment shader

let theShader;

const vert = `
attribute vec3 aPosition;
void main() {
  gl_Position = vec4(aPosition, 1.0);
}
`;

const frag = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
void main(){
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = uv - 0.5;
  p.x *= u_resolution.x / u_resolution.y;
  float r = length(p);
  float a = atan(p.y, p.x);
  float waves = 0.5 + 0.5 * sin(10.0 * r - u_time * 1.5 + sin(a * 6.0 + u_time));
  vec3 col = vec3(0.2 + 0.6 * waves, 0.4 + 0.4 * sin(u_time * 0.3 + r * 10.0), 0.6 - 0.5 * r);
  gl_FragColor = vec4(col, 1.0);
}
`;

function setup(){
  const cnv = createCanvas(480,480,WEBGL);
  noStroke();
  theShader = createShader(vert, frag);
}

function draw(){
  shader(theShader);
  theShader.setUniform('u_resolution',[width, height]);
  theShader.setUniform('u_time', millis() / 1000.0);
  quad(-1,-1, 1,-1, 1,1, -1,1);
}

function mousePressed(){
  // clicking randomizes a subtle phase (by toggling a uniform factor via time offset)
}
