const CANVAS_WIDTH = 666;
const CANVAS_HEIGHT = 666;
const BG_COLOR = [pink];
let waveForm;
let waveFormAnim;

function preload() {
  const waveFormSpritesheet = loadSpriteSheet("img/wave3.png", 333, 333, 32);
  waveFormAnim = loadAnimation(waveFormSpritesheet);
  waveForm = createSprite(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 333, 333);
  waveForm.moveSpeed = 5;
  waveForm.scale = (2.0)
}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  waveForm.addAnimation("move", waveFormAnim);
  waveForm.addImage("still", loadImage("img/waveForm1 copy.png"));
  waveForm.setDefaultCollider();
}

function update(object) {
  if (keyDown("up") || keyDown("down") || keyDown("left") || keyDown("right")) {
    if (keyDown("up")) {
      object.addSpeed(2, 270);
    }
    if (keyDown("down")) {
      object.addSpeed(2, 90);
    }
    if (keyDown("left")) {
      object.addSpeed(2, 180);
      object.mirrorX(-1);
    }
    if (keyDown("right")) {
      object.addSpeed(2, 0);
      object.mirrorX(1);
    }
  } else {
    object.setSpeed(0);
  }
  drawObject(object);
}

function drawObject(object) {
  if (object.getSpeed() > 0.0001) {
    object.changeAnimation("move");
  } else {
    object.changeImage("still");
  }
  waveForm.limitSpeed(waveForm.moveSpeed);
  drawSprite(object);
}

function draw() {
  background(BG_COLOR);
  update(waveForm);
}
