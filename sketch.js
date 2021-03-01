var tiger, tigerAnimation
var backgroundImage, background
var bush, bushImage
var deer, deerAnimation
var ground,invisibleGround

function preload(){
  tigerAnimation=loadAnimation("pic/t1.png","pic/t2.png","pic/t3.png","pic/t4.png","pic/t5.png")
  deerAnimation=loadAnimation("pic/d1.png", "pic/d2.png", "pic/d3.png","pic/d4.png","pic/d5.png")
  bushImage=loadImage("pic/bush.png")
  backgroundImage=loadImage("pic/bg1.png")
}

function setup() {
  createCanvas(1200,400);
  background1=createSprite(400,200);
  background1.addImage("bg",backgroundImage);
  background1.scale=3.5
 background1.velocityX=-5;

 tiger=createSprite(150,310);
 tiger.addAnimation("tiger",tigerAnimation);
 tiger.scale=0.6

 deer=createSprite(800,305)
 deer.addAnimation("deer", deerAnimation)
 deer.scale=0.5

invisibleGround=createSprite(200,190,400,10)
invisibleGround.visible=false;


}

function draw() {
  background("green");
  
    if (background1.x < 0){
    background1.x =1200
  }

if(keyDown("space")){
  deer.velocityY= -10
}

deer.velocityY= deer.velocityY + 0.8

spawnBush()

  drawSprites();
}

function spawnBush(){
  if(frameCount % 150 === 0){
  bush=createSprite(1200,300,200,700)
  bush.addImage("bush", bushImage)
  bush.scale=0.4
  bush.velocityX=-5
  var rand=Math.round(random(1,10))
  }
}