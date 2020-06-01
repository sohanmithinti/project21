var car, wall,thickness;
var speed, weight, bullet;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed = random(223,321);
  weight = random(30,52);
  thickness= random(22,83);
  car = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2);
}

function draw() {
  background(255,255,255);  
  car.velocityX = speed;
  if(hasCollied(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5* weight* speed* speed(thickness/thickness/thickness);

    if(damage>10){
      wall.shapeColor(255,0,0);
    }
    if(damage<10){
      wall.shapeColor(0,255,0);
    }
  }

function hasCollied(){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  retrun = false;
}