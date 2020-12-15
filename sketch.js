
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var bin1,bin2,bin3;

var paper;

function setup() {

	var canvas = createCanvas(800,400);

  engine = Engine.create();

  world = engine.world;

  bin1 = new Bin(750,325,10,80);
  bin2 = new Bin(650,325,10,80);
  bin3 = new Bin(700,360,80,10)
  
  paper = new Paper(100,100,20);

  ground = new Ground(400,380,800,20);

}


function draw() {
  rectMode(CENTER);
  background("black");

  Engine.update(engine);
  
  bin1.display();
  bin2.display();
  bin3.display();

  paper.display();

  ground.display();

}

function keyPressed(){
  if (keyCode === UP_ARROW){
 
    Matter.Body.applyForce(paper.body,paper.body.position,{x:10.5,y :-10.5});

  }

}
