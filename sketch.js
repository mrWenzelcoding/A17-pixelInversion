let alphaC;
let layer;
let rad = 40;

let w = 500,
  h = 500;

let mouseIsDragged = false;

let img;
function preload() {
  img = loadImage("inverse.jpg");
  img1 = loadImage("cup.png");
}

function setup() {
  pixelDensity(1);
  createCanvas(img.width, img.height);
  layer = createGraphics(img.width, img.height);
  layer.image(img1,0,0);
}

function draw() {
  noStroke();
  image(img, 0, 0);
  image(layer, 0, 0);

  if (mouseIsPressed) {
    noFill();
    ellipse(mouseX, mouseY, rad, rad);
  }
}

function mouseDragged() {
  for (let x = mouseX - rad; x < mouseX + rad; x++) {
    for (let y = mouseY - rad; y < mouseY + rad; y++) {
      if (dist(x, y, mouseX, mouseY) < rad && x > 0 && x <= width) {
        layer.set(x, y, alphaC);
      }
    }
  }
  layer.updatePixels();
}
