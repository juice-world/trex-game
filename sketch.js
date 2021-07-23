var dino;
var ground;
var groundImage;
var dinoRunning;
var invisGround;
var cloud;
var cloudImage;

function setup(){
createCanvas(750,300);
dino=createSprite(50,260,20,20);
dino.scale=0.5;

dino.addAnimation("running",dinoRunning);

ground=createSprite(200,280,600,20);
ground.addImage("ground",groundImage);
ground.x=ground.width/2;
ground.velocityX=-2;

invisGround=createSprite(200,290,600,11);
invisGround.visible=false;
}

function draw(){
  background("#d2aa6d");
  if(keyDown("space") && dino.y>=201){
  dino.velocityY=-6;

  }
  dino.velocityY=dino.velocityY+0.4;
  dino.collide(invisGround);

  if(ground.x<0){
    ground.x=ground.width/2;
  }
  spawnCloud();
  drawSprites();
  
  

}
function preload(){
  groundImage=loadImage("ground2.png");
dinoRunning=loadAnimation(

  "trex1.png","trex2.png","trex3.png"
);
cloudImage=loadImage("cloud.png");
}


function spawnCloud(){

if(frameCount%60===0){
  cloud=createSprite(750,101,55,24);
  cloud.addImage(cloudImage);
  cloud.velocityX=-2;
  cloud.y=Math.round(random(5,60));
  cloud.scale=0.7;
  cloud.depth=dino.depth;
  dino.depth=dino.depth+1    
}
}