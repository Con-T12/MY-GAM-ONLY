const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Spa, Spaa;

function preload() {
  bg = loadImage("Background1.png");
  
  Spa = loadImage("Spaceship.png");
}

function setup() {
  createCanvas(1500,800);
  engine = Engine.create();
  world = engine.world;

 Spaa = createSprite(500, 500);
  Spaa.addImage("Spaceship", Spa);
  Spaa.scale = 0.2;

  
}

function draw() {
  background(bg);
  Engine.update(engine);









  drawSprites();
}




function keyPressed(){

  if(keyCode === LEFT_ARROW){
      Spaceship.velocityX = -5; 
  }

  if(keyCode === UP_ARROW){
      Spaceship.velocityY = 5; 
  }
      if(keyCode === RIGHT_ARROW){
          Spaceship.velocityX = 5; 
      }
          if(keyCode === DOWN_ARROW){
              Spaceship.velocityY = -5; 
          }     
}

