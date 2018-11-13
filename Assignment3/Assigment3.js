
var angle = 0;
var jigglypuff;
var texture;

function preload() {
  texture = loadImage("1455.png");
  jigglypuff = loadModel("CG.obj");
}

function setup() {
  createCanvas(900, 900, WEBGL);
}

function draw() {
  background(0);
  ambientLight(255, 0, 255);
  directionalLight(255, 255, 255, 0, 0, 1);
  translate(0,170,0);
  scale(0.3);
  rotateY(angle);
  texture(texture);
  model(jigglypuff);
  angle += 0.03;
}
