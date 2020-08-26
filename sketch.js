var wall, thickness;

var Bullet, speed, weight;

var bulletRightEdge;

var  lwall, lbullet;



function setup() {
  createCanvas(1600,400);

  Bullet=createSprite(50,200,50,50);
  Bullet.shapeColor=color(255);
  

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  

  speed=random(223,21);
  weight=random(30,52);
  thickness=random(22,83);

  Bullet.velocityX = speed; 
  
}

function draw() {

background(0);
 
if (hasCollided(Bullet,wall))
{
Bullet.velocityX=0;
var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);

if (damage>10)
{
  wall.shapeColor=color(255,0,0);
  }
if (damage<10)
{
  wall.shapeColor=color(0,255,0);
  }
}

  drawSprites();
}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false; 
}