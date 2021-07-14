
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var left, right, base
var leftBody, rightBody, baseBody 
var ground
var ball
var groundBody
var dustbinImage

function preload()
{
	dustbinImage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	leftBody =createSprite(580,610,10,100)
    leftBody.shapeColor = "white"
    rightBody =createSprite(780,610,10,100)
    rightBody.shapeColor = "white"
    baseBody =createSprite(680,660,200,10)
    baseBody.shapeColor = "white"
  
    left = new Dustbin(500,610,10,100)
    right = new Dustbin(780,610,10,100)
    base = new Dustbin(680,660,200,10)

	ground=createSprite(width/2, height-35, width,10);
  ground.shapeColor= "purple"
  
  groundBody = Bodies.rectangle(400,height-35,width,10,{isStatic:true})
  World.add(world,groundBody)
	
	ball = new Paper(50,660,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  ball.display();
  imageMode(CENTER)
  
  drawSprites();
  image(dustbinImage,680,610,240,120)
}

function keyPressed(){
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(ball.body,ball.body.position,{x:70,y:-70});

  }
}



