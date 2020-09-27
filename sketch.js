var fixedRect, movingRect;
var gameObject1,gameObject2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1= createSprite(400,100,50,50);
  gameObject1.shapeColor="blue"
  gameObject2= createSprite(200,100,50,50);
  gameObject2.shapeColor="orange"

  movingRect.velocityY = -5;
 gameObject1.velocityY = +5;
}

function draw() {
  background(0,0,0);  

bounceOff(movingRect,gameObject1);
 
  drawSprites();
}
function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX=(-1)*object1.velocityX;
  object2.velocityX=(-1)*object2.velocityX; 
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY=(-1)*object1.velocityY;
    object2.velocityY=(-1)*object2.velocityY;
}

}