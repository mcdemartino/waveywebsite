const CANVAS_WIDTH = 5000;
const CANVAS_HEIGHT = 5000;
var mouse_moved = false;
var touch_started = false;
var explode_sprite_sheet;
var EYE_sprite_sheet;
var tile_sprite_sheet;

var EYE_walk;
var EYE_stand;
var EYE_sprite;


let EYE;
let EYEAnim;
let EYESpritesheet;


document.body.style.backgroundImage = "'projectDOS.jpg";

function preload(){
    EYESpritesheet = loadSpriteSheet('wave3.png', 999, 1111, 36);
    EYEAnim = loadAnimation(EYESpritesheet);
    EYE.moveSpeed = 5;
    
    loadJSON('wave3.json', function(tile_frames) {
      // Load tiles sprite sheet from frames array once frames array is ready
      tile_sprite_sheet = loadSpriteSheet('wave3', tile_frames);
    });
}
function setup(){
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  EYE_sprite = createSprite(111, 284, 70, 94);
  EYE_sprite.addAnimation('walk', EYE_walk);
  EYE_sprite.addAnimation('stand', EYE_stand);
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
  EYE.limitSpeed(EYE.moveSpeed);
  drawSprite(object);
}

