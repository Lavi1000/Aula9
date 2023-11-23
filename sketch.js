
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;
let engine;
var ground;
var block1;
var block2;
var ball;


//function preload() {

//}

function setup() {
	
	createCanvas(400, 400);
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var ground_options = {
		isStatic: true
	}

	var ball_options = {
		restitution: 0.5,
		friction: 0.02,
		frictionAir: 0

	}
	var block1_options = {
		restitution: 0.7,
		friction: 0.01,
		frictionAir: 0.80

	}

	var block2_options = {
		restitution: 0.01,
		friction: 1,
		frictionAir: 0.3
	}

	ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
	World.add(world, ground);

	ball = Bodies.circle(220, 10, 10, ball_options);
	World.add(world, ball);

	block1 = Bodies.rectangle(110, 50, 10, 10, block1_options);
	World.add(world, block1);

	block2 = Bodies.rectangle(350, 50, 10, 10, block2_options);
	World.add(world, block2);

	rectMode(CENTER);
	ellipseMode(RADIUS);
	Engine.run(engine);

}


function draw() {
	background(51);
	drawSprites();
	Engine.update(engine);
	


	ellipse(ball.position.x, ball.position.y, 10);
	rect(block1.position.x, block1.position.y, 10);
	rect(block2.position.x, block2.position.y, 10);
	rect(ground.position.x, ground.position.y, 400, 20);
}


