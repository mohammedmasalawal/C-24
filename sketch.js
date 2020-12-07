/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render= Matter.Render;
var paper,ground,box1,box2,box3; 
function preload()
{
	
}
function setup() {
	createCanvas(800, 200);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground=new Ground(400,190,800,10);
	ground.debug=true;
	
	paper=new Paper(150,100,20);
	  paper.debug=true;
	  box1=new Box(600,170,150,20);
	  box2=new Box(525,130,20,70);
	  box3=new Box(675,130,20,70);
	 
   	Engine.run(engine);
	console.log(ground);
  
}
function draw() {
  background(0);
	
	ground.display();
	paper.display();
	box1.display();
  	box2.display();
	box3.display();
	  
	text (mouseX+","+mouseY,mouseX,mouseY);
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}*/


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,box1,box2,box3; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	  

	  	ground=new Ground(400,190);

	  

		paper=new Paper(80,180,20);

      	box1=new Box(600,170,170,20);
	 	box2=new Box(525,130,20,70);
	  	box3=new Box(675,130,20,70);

   	Engine.run(engine);

	console.log(ground);
  
}


function draw() {
  background(0);

	ground.display();
	
	box1.display();
  	box2.display();
	box3.display();

	paper.display();

	text (mouseX+","+mouseY,mouseX,mouseY);

  
  	drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}
}
