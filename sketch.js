
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var crumpledBall;

function preload()
{
	
}

function setup() {
	createCanvas( 1200, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, 380, width, 20);

	dustbinwall1 = new Dustbin( 800, 320, 20, 100);
	dustbinwall2 = new Dustbin( 885, 360, 150, 20);
	dustbinwall3 = new Dustbin( 955, 320, 20, 100);
	crumpledPaper = new paper( 100, 200, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display(); 
  crumpledPaper.display(); 
  dustbinwall1.display();
  dustbinwall2.display();
  dustbinwall3.display();	
  
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(crumpledPaper.body, crumpledPaper.body.position,{x:75,y:-75});
  }
}

