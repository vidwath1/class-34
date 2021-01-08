const Engine=Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
function setup() {
  engine=Engine.create();
  world= engine.world;
  createCanvas(800,800);
ground = new Ground (400,590,800,10)
  ball = new Ball(300,300,40)
  rope = new Rope(ball.body ,{x:300 , y:200})
  box = new Box(400,100,50,50);
  box6 = new Box(400,150,50,50);
  box1 = new Box(400,200,50,50);
  box2= new Box(400,250,50,50);
  box3 = new Box(400,300,50,50);
  box4 = new Box(400,350,50,50);
  box5 = new Box(400,400,50,50);
  box7 = new Box(400,450,50,50);
  box8 = new Box(400,500,50,50);
  box9 = new Box(400,550,50,50);
  box10= new Box(400,600,50,50);
  box11 = new Box(400,600,50,50);
  box12 = new Box(400,600,50,50);
  box13 = new Box(400,600,50,50);
  
  
}

function draw() {
  background("skyblue");  
  Engine.update(engine);
 ground.display();
ball.display();
rope.display();
box.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
