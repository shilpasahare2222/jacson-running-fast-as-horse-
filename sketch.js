

var path;
var pathI;
var invisibleGround;
var boyImg;
var boy;

function preload(){

  // adding image and animation
  pathI = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  
  // creating path to run
  path=createSprite(200,200);
  path.addImage(pathI);
  path.velocityY = 4;
  path.scale= 1.2;

 //creating invisibleGround
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
    
// creating jacson boy
boy= createSprite(190,200,10,10);
boy.addAnimation(  "Runner-1.png"  , boyImg);
boy.scale= 0.08;
  
}

function draw() {
  background(0);

// moving path 
  if(path.y >400){
path.y = height/2;
  }
  
//moving boy
  boy.x = World.mouseX;
  
// boy collide with invisibleGroud
  boy.collide(invisibleGround);

  drawSprites();
}
