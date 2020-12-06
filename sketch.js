var wall,thickness;
var bullet,speed,weight;



function setup() {
  createCanvas(800,400);

  thickness=random(22,83);
  wall = createSprite(500,200,20,300)
  speed=random(223,321);
  weight=random(30,52);
  bullet = createSprite(100,200,20,20);
  bullet.velocityX=speed;


}



function draw() { 
background("cyan"); 

if(hasCollided(bullet ,wall)){

  bullet.velocityX=0;
  var damage= 0.5* weight * speed * speed/(thickness * thickness * thickness);

  if(damage > 10){
    wall.shapeColor=color(255,0,0);
  }

  if(damage < 10){
    wall.shapeColor=color(0,255,0);
  }
}

drawSprites();
}

