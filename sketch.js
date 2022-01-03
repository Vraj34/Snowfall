var engine, world;
var kid;
var backroundImg,kidImg,snowImg;


function preload(){
  backgroundImg=loadImage("snow2.jpg")
  kidImg=loadImage("kid.png") 
  
}

function setup() {
createCanvas(1000,600);
    
  kid=createSprite(200,546)
  kid.addImage(kidImg)
  kid.scale=0.5
  

  

}

function draw() {
  background(backgroundImg);  
  
  if(keyCode === 39){
    kid.x=kid.x+10;
  }
  if(keyCode === 37){
    kid.x=kid.x-10;
  }
 
  drawSprites();
  
}