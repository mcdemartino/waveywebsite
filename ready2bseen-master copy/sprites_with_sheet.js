
function draw(){
  clear();
  background(0);
 animation(EYESAnim, 1, 130);
 update(EYES);
}
for (var x = 0; x < 840; x += 70) {
  tile_sprite_sheet.drawFrame('wave3.png', x, 330);
}
tile_sprite_sheet.drawFrame('https://res.cloudinary.com/allhailmc/image/upload/v1601249195/Eyez/eyezcloudinary/eyesNew/2.png', 700, 260);
tile_sprite_sheet.drawFrame('https://res.cloudinary.com/allhailmc/image/upload/v1601249195/Eyez/eyezcloudinary/eyesNew/3.png', 0, 260);

var eventX;
if (isTouch()) {
  eventX = touchX;
} else {
  eventX = mouseX;
}
if(eventX < player_sprite.position.x - 10) {
  player_sprite.changeAnimation('walk');
  // flip horizontally
  player_sprite.mirrorX(-1);
  // move left
  player_sprite.velocity.x = -2;
}
else if(eventX > player_sprite.position.x + 10) {
  player_sprite.changeAnimation('walk');
  // flip horizontally
  player_sprite.mirrorX(1);
  // move right
  player_sprite.velocity.x = 2;
}
else {
  player_sprite.changeAnimation('stand');
  //if close to the mouse, don't move
  player_sprite.velocity.x = 0;
}

//draw the sprite
drawSprites();

function touchStarted() {
touch_started = true;
}

function mouseMoved() {
mouse_moved = true;
}

function isTouch() {
return touch_started && !mouse_moved;
}