var fixedrect,movingrect;
var object1,object2;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(200,200,50,50);
  movingrect.shapeColor="green"
  fixedrect.shapeColor="green"
 movingrect.velocityX=5 ;
 fixedrect.velocityX=-5 ;

}

function draw() {
  background(255,255,255);
  //movingrect.x=mouseX;
  //movingrect.y=mouseY;

  if(isTouching(movingrect,fixedrect))
{
  movingrect.shapeColor="red"
  fixedrect.shapeColor="red"
}
else
{
  movingrect.shapeColor="green"
  fixedrect.shapeColor="green"
}
bounceOff(movingrect,fixedrect);
  
  
  drawSprites();
}
