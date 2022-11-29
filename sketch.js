var tileable;
var tile;
var player;
var pin;
var bubblesGroup;
var playerGroup;
var score;
var turtle;
var turtlesGroup;
var gameState=0;
var popSound;
var gameOverSound;


function preload(){
  tileable=loadImage("./assets/Tileable-classic-water-texture.jpg")
  tile=loadImage("./assets/tile000.png")
   pin=loadImage("./assets/pin.png")
   turtle=loadImage("./assets/turtle.png")
   popSound=loadSound("./assets/QKTA234-pop.mp3")
   gameOverSound=loadSound("./assets/D2ZZHGM-game-over.mp3")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  player=createSprite(100,150,20,20);
  player.addImage("pin",pin);
  player.scale=0.2;
  score=0;

  playerGroup=createGroup()
  bubblesGroup=createGroup()
  turtlesGroup=createGroup()
  playerGroup.add(player);

 
}

function draw() {
  background(tileable);  
  if(gameState==0){
    spawnBubbles();
    spawnObstacles();
    player.x=World.mouseX;
    player.y=World.mouseY;
    if(bubblesGroup.collide(player)){
    handleBubbleCollision(bubblesGroup);
    popSound.play();
    }
  
    if(turtlesGroup.collide(player)){
      gameState=1
      gameOverSound.play();
    }
  }
  

  if(gameState==1){
    textSize(45);
    fill("blue");
    text("GameOver",windowWidth/2,windowHeight/2)
    bubblesGroup.destroyEach();
    turtlesGroup.destroyEach();
    playersGroup.destroyEach();
  }
  
  drawSprites();
  textSize(20);
  fill ("red")
  text("Score: "+score,50,50)
}

function spawnBubbles(){
  if(frameCount%150==0){
    var x=random(50,windowWidth-50);
  var bubble=createSprite(x,0,20,20);
  bubble.addImage("balloon",tile);
  bubble.scale=0.5;
  bubble.velocityY=7;
  bubblesGroup.add(bubble);
  }
}

function spawnObstacles(){
  if(frameCount%80==0){
    var x=random(100,windowWidth-100);
  var obstacle=createSprite(x,0,20,20);
  obstacle.addImage("turtle",turtle);
  obstacle.velocityY=7;
  turtlesGroup.add(obstacle);
  }

}

function handleBubbleCollision(bubblesGroup){
  score=score+5
bubblesGroup.destroyEach();
}

function playSound(){

}