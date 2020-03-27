const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var ground;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
    box1 = new Box(190,340,70,130)
    box2=new Box (180,340,40,170)
    box3=new Box (195,340,40,170)
    box4 =new Box (175,340,40,190)
    box5= new Box (200,340,40,190)
    ground=new Ground(200,390,400,20)

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
box2.display ();
box3.display ();
box4.display ();
box5.display ();
   ground.display();




}