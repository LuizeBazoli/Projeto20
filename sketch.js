
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var block1;
var block2;
var block3;

function preload()
{
	
}

function setup() {
	createCanvas(400, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var ground_options={
		isStatic: true
	}
	var block1_options={
		restitution: 0.7,
		friction: 0.01,
		frictionAir:0.01
	}
	var block2_options={
		restitution: 0.3,
		friction: 0.05,
		frictionAir:0.05
	}
	var block3_options={
		restitution: 0.5,
		friction: 0.02,
		frictionAir:0
	}

	ground= Bodies.rectangle(200,590,400,20,ground_options);
	World.add(world,ground);

	block1= Bodies.rectangle(70,100,40,40,block1_options);
	World.add(world,block1);

	block2= Bodies.rectangle(330,100,60,30,block2_options);
	World.add(world,block2);
	
	block3= Bodies.circle(180,100,40,block3_options);
	World.add(world,block3);

	fill("orange");

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(150);

  rect(ground.position.x,ground.position.y,400,20);
  rect(block1.position.x,block1.position.y,40,40);
  rect(block2.position.x,block2.position.y,60,30);
  ellipse(block3.position.x,block3.position.y,40);

 Engine.update(engine);
}



