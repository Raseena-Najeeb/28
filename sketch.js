
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var distanceL = 40;

var boy;
var tree;
var stone;
var slingshot;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	boy = new Boy(400,590);
	ground = new Ground(800,650,1600,10);
	tree = new Tree(1300,380);
	stone = new Stone(320,530);

	mango1 = new Mango(1300,300);
	mango2 = new Mango(1420,285);
	mango3 = new Mango(1190,270);
	mango4 = new Mango(1430,250);
	mango5 = new Mango(1345,290);
	mango6 = new Mango(1240,295);
	mango7 = new Mango(1455,305);
	mango8 = new Mango(1375,250);

	mango9 = new Mango(1300,200);
	mango10 = new Mango(1420,215);
	mango11= new Mango(1190,230);
	mango12 = new Mango(1330,250);
	mango13 = new Mango(1245,240);
	mango14 = new Mango(1140,245);
	mango15 = new Mango(1255,200);
	mango16 = new Mango(1375,230);


	slingshot = new SlingShot(stone.body,{x:320,y:530});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  boy.display();
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  mango16.display();

	detectCollision(mango1,stone);
	detectCollision(mango2,stone);
	detectCollision(mango3,stone);
	detectCollision(mango4,stone);
	detectCollision(mango5,stone);
	detectCollision(mango6,stone);
	detectCollision(mango7,stone);
	detectCollision(mango8,stone);
	detectCollision(mango9,stone);
	detectCollision(mango10,stone);
	detectCollision(mango11,stone);
	detectCollision(mango12,stone);
	detectCollision(mango13,stone);
	detectCollision(mango14,stone);
	detectCollision(mango15,stone);
	detectCollision(mango16,stone);


  slingshot.display();
  
  drawSprites();
 
}


function mouseDragged()
{
    Matter.Body.setPosition(stone.body,{ x:mouseX, y:mouseY});
}

function mouseReleased()
{
    slingshot.fly();
}

function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stone.body,{x:320,y:530});
		slingshot.attach(stone.body);
	}
}

function detectCollision(lmango,lstone)
{
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance <= distanceL)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}




