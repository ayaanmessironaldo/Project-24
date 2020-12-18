
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var boxL, boxR, boxD;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,100,20);

	ground = new Box(width/2,675,width,20);

	boxD = new Box(600,650,200,20);
	boxL = new Box(500,600,20,100);
	boxR = new Box(700,600,20,100);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  ground.display();
  paper.display();
  boxD.display();
  boxL.display();
  boxR.display();
  
  drawSprites();
 
}

function keyPressed(){

	if(keyDown(UP_ARROW)){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})
	}
}