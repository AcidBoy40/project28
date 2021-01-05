
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1;
var tree1;
var boy1;
var stone1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	mango1 = new mango(400, 350, 30);
	tree1 = new tree(200, 200, 20, 20);
	stone1 = new stone(150, 400, 20);
	// boy1 = new boy(550, 600, 20, 20);

	

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);
  

  mango1.display();
  tree1.display();
  stone1.display();
  boy1.display();
 
}



