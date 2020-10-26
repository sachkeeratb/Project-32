const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball, ballIMG;
var block8, block9, block10, block11, block12, block13, block14, block15, block16;
var slingShot;

function preload() {
  ballIMG = loadImage("ball.png");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ball = Bodies.circle(100,200,30);
  World.add(world, ball);
  
  slingShot = new SlingShot(this.ball,{x:100,y:200});

  ground = new Ground(390, 280, 300, 10);

  block8 = new Box(330, 235, 30, 40);
  block9 = new Box(360, 235, 30, 40);
  block10 = new Box(390, 235, 30, 40);
  block11 = new Box(420, 235, 30, 40);
  block12 = new Box(450, 235, 30, 40);

  block13 = new Box(360, 195, 30, 40);
  block14 = new Box(390, 195, 30, 40);
  block15 = new Box(420, 195, 30, 40);
  
  block16 = new Box(390,155,30,40);
}

function draw() {
  background(56, 44, 44);  

  Engine.update(engine);

  ground.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  slingShot.display();

  // ellipse(100, 200, 30, 30);
  // ball.x = World.mouseX;
  // ball.y = World.mouseY;

  image(ballIMG, ball.position.x, ball.position.y, 40, 40);
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(polygon.body, {x: 200, y: 50});
      slingshot.attach(polygon.body);
  }
}

async function getBackgroundIMG() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Toronto");

  var responseJSON = await response.json();

  var dateTime = responseJSON.datetime;

  var hour = dateTime.slice(11,13);

  if(hour >= 06 && hour <= 19) {
    backgroundIMG = (0, 123, 203);
  }
  else {
    backgroundIMG = (15, 31, 81);
  }
}
