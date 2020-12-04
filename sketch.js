
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,tree,treeImg,boy,boyImg,mango1,mango2,mango3,mango4,mango5,mango6,mango7,stone1;

function preload()
{
treeImg=loadImage("Plucking mangoes/tree.png");	
boyImg=loadImage("Plucking mangoes/boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=createSprite(400,700,800,50);
	tree=createSprite(600,450,50,200);
	tree.addImage("tr",treeImg);
	tree.scale=0.4;
	boy=createSprite(100,630,50,200);
	boy.addImage("b",boyImg);
	boy.scale=0.1;
	mango1=new Mango(450,350,10,10);
	mango2=new Mango(520,250,10,10);
	mango3=new Mango(500,420,10,10);
	mango4=new Mango(550,350,10,10);
	mango5=new Mango(690,380,10,10);
	mango6=new Mango(650,250,10,10);
	mango7=new Mango(750,300,10,10);
	stone1=new Stone(200,200,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240);
  
  drawSprites();

  mango1.display();
 mango2.display();
 mango3.display(); 
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 //stone1.display();
}



