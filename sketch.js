var gameState = "LV 1";
var PC 
var ground;
var ground2;
var ground3;
var ground4;
var ground5;
var ground6;
var ground7;
var ground8;
var ground9;
var ground10;
var ground11;
var ground12;
var ground13;
var ground2Img;
var gate;
var emy1;
var emy2;
var emy3;
var emyImg;
var chest;
var chestImg;
var b;
var p = 1;
var h;
var shot;
var lives = 2;
var jumpCounter = 0;
var jumpForce = 25;
var ground1Img;
var ba1;
var portalImg;
var particles = [];
var dh = 2;
function preload(){
  
ground1Img = loadImage("flg.png");
ground2Img = loadImage("ground.png");
portalImg = loadImage("portal.png");
chestImg = loadImage("chest.png");
emyImg = loadImage("emy.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
   PC = createSprite(50,430,20,30);
   PC.shapeColor = "yellow"
   emy1 = createSprite(480,430,20,30);
   emy1.velocityX = -3;
emy2 = createSprite(1450,430,20,30);
emy2.velocityX = -3;
emy3 = createSprite(1450,430,20,30);
emy3.velocityX = 3;
   ground = createSprite(100,460,300,40);
   ground.addImage("ground", ground2Img)
   ground.scale = 0.3;
   ground.setCollider("rectangle",0,0,1000,170);
   
ground2 = createSprite(210,350,150,40);
ground2.addImage("abc", ground1Img);

ground2.setCollider("rectangle",0,0,190,50);

ground2.scale = 0.5;
ground3 = createSprite(350,250,150,40);
ground3.addImage("abc", ground1Img);
ground3.setCollider("rectangle",0,0,150,50);

ground3.scale = 0.5;
ground4 = createSprite(450,460,300,40);
ground4.addImage("ground", ground2Img);
ground4.scale = 0.3;
ground4.setCollider("rectangle",0,0,1050,170);
   
ground5 = createSprite(700,460,50,40);
ground6 = createSprite(770,460,20,40);
ground7 = createSprite(1000,460,300,40);
ground7.addImage("ground", ground2Img);
ground7.scale = 0.3;
ground7.setCollider("rectangle",0,0,1050,170);
   
ground8 = createSprite(1450,460,300,40);
ground8.addImage("ground", ground2Img);
ground8.scale = 0.3;
ground8.setCollider("rectangle",0,0,1000,170);
   
ground9 = createSprite(140,430,100,30);
ground9.shapeColor = "brown";
ground11 = createSprite(1700,350,50,50);
ground10 = createSprite(1500,350,300,20)
ground11.shapeColor = "blue"
ground12 = createSprite(1600,200,20,300);
ground13 = createSprite(1370,200,20,300);
gate = createSprite(400,190,30,40);
gate.addImage("a", portalImg);
chest = createSprite(1500,300,20,20);
chest.addImage("b", chestImg);
chest.scale = 0.1;
gate.scale = 0.09;

shot = createSprite(100,100,10,10);
shot.visible = false;
 ba1 = createSprite(400,250,10,500);
 ba1.visible = false;
 b = createSprite(0,10,10,10);
 b.velocity = 5;
 h = createSprite(500,10,10,10);
 
}

function draw() {
 
  background("black");
  fill(rgb(240,222,173));
 textSize(30);
 text("Welcome to Magic Dungeon",10,300);
 textSize(20);
 text("Press space key (to release the bullet move after pressing space)", 400,400);
 text("use your bullets to clear the puzzle ahead", 1000,300);
 textSize(25);
 text("use arrow keys to move",  250,100);
 
  PC.velocityX = 0;
PC.velocityY = 0;

   if(p === 1){
if (keyDown(RIGHT_ARROW)){
PC.velocityX = 5;


}
if (keyDown(LEFT_ARROW)){
    PC.velocityX = -5;
    
    
    }
    
    if(keyDown(UP_ARROW)){
PC.velocityY = -7;
PC.width = 30;
PC.height = 20;
jumpCounter = jumpCounter+1;
if(jumpCounter > jumpForce){

PC.velocityY = 7;

}
    }

    }
    if(PC.velocityY === 0 && PC.isTouching(ground)){

      jumpCounter = 0;
      PC.width = 20;
      PC.height = 30;
      }
      if(PC.velocityY === 0 && PC.isTouching(ground2)){

        jumpCounter = 0;
        PC.width = 20;
        PC.height = 30;
        }
    if(PC.velocityY === 0 && PC.isTouching(ground3)){

      jumpCounter = 0;
      PC.width = 20;
      PC.height = 30;
    }
    if(PC.velocityY === 0 && PC.isTouching(ground4)){

      jumpCounter = 0;
      PC.width = 20;
      PC.height = 30;
      }
      if(PC.velocityY === 0 && PC.isTouching(ground5)){

        jumpCounter = 0;
        PC.width = 20;
        PC.height = 30;
        }
     if(PC.velocityY === 0 && PC.isTouching(ground6)){

      jumpCounter = 0;
      PC.width = 20;
       PC.height = 30;
      }
      if(PC.velocityY === 0 && PC.isTouching(ground7)){

        jumpCounter = 0;
        PC.width = 20;
        PC.height = 30;
        }
  if(PC.velocityY === 0 && PC.isTouching(ground8)){

    jumpCounter = 0;
    PC.width = 20;
    PC.height = 30;
    }
          if(PC.velocityY === 0 && PC.isTouching(ground9)){

            jumpCounter = 0;
            PC.width = 20;
            PC.height = 30;
            }
            if(PC.velocityY === 0 && PC.isTouching(ground10)){

              jumpCounter = 0;
              PC.width = 20;
              PC.height = 30;
              }
              if(PC.velocityY === 0 && PC.isTouching(ground11)){

                jumpCounter = 0;
                PC.width = 20;
                PC.height = 30;
                }
                if(PC.velocityY === 0 && PC.isTouching(ground12)){

                  jumpCounter = 0;
                  PC.width = 20;
                  PC.height = 30;
                  }
                  if(PC.velocityY === 0 && PC.isTouching(ground13)){

                    jumpCounter = 0;
                    PC.width = 20;
                    PC.height = 30;
                    }
camera.position.x = PC.position.x;
//camera.position.y = PC.position.y;




    PC.velocityY = PC.velocityY + 3

PC.collide(ba1);
PC.collide(ground);
PC.collide(ground2);
PC.collide(ground3);
PC.collide(ground4);
PC.collide(ground5);
PC.collide(ground6);
PC.collide(ground7);
PC.collide(ground8);
PC.collide(ground9);
PC.collide(ground10);
PC.collide(ground12);
PC.collide(ground13);
if(PC.isTouching(gate)){
PC.x = 400;
PC.y = 430;
ba1.destroy();

}
if (PC.collide(ground7)){
  a = createSprite(emy2.x,emy2.y,10,10);
  a.velocityX = -3;
  console.log(3);

}



if(emy1.x < 380 ){
  emy1.velocityX = 2;
  
  
 }
 if(emy1.x > 500 ){
  emy1.velocityX = -2;
 }
  
 

 if(emy2.x < 1300){
  emy2.velocityX = 3;
  
  
 }
 if(emy2.x > 1500){
  emy2.velocityX = -3;
  
  
 }
 if(emy3.x < 1300){
  emy3.velocityX = 3;
  
  
 }
 if(emy3.x > 1500){
  emy3.velocityX = -3;
  
  
 }
 
if(keyCode === 32){
//shot.destroy();


bu();

 



}
if(shot.isTouching(emy1)){
  emy1.destroy();
  shot.destroy();
  dh = 1;
  
  
  
  }
  if(shot.isTouching(emy2)){
    emy2.destroy();
    shot.destroy();
    
    }
    if(shot.isTouching(emy3)){
      emy3.destroy();
      shot.destroy();
      
      }
      if(shot.isTouching(ground11)){
shot.destroy();
        ground13.destroy();

      }
    
  if(PC.y > 500 && lives > 0){
lives = lives-1;
PC.x = 50 ;
PC.y = 430;

  }
  if(PC.isTouching(emy1)|| PC.isTouching(emy2)|| PC.isTouching(emy3)&& lives> 0){
lives = lives-1;
PC.x = 50;
ba1.destroy();
  }
  if(lives === 0){
    textSize(50);
    fill("white");
text("You lose", displayWidth/5,displayHeight/5);
PC.x = 50;
    PC.y = 430;

  }
  if(PC.isTouching(chest)){
    p = 2;
text("YOU WIN", PC.x, PC.y-50);

  }
  
   
  
  drawSprites();
 
  
}

function bu(){
shot.destroy();
  shot = createSprite(PC.x,PC.y,10,10);
  shot.velocityX = 7;
  
}
