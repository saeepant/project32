const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
function preload(){
    bckgrndImg = loadImage("sprites/bg.jpg");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(400, 300,200, 10);


    box1 = new Box(400,280,20,30);
    box2 = new Box(420,280,20,30);
    box3 = new Box(440,280,20,30);
    box4 = new Box(460,280,20,30);
    box5 = new Box(480,280,20,30);
    box6 = new Box(380,280,20,30);


    polygon = new Ball(200,150);

    sling1 = new SlingShot(polygon.body , {x: 200, y: 100})
}

function draw(){
Engine.update(engine);

    background(0);

    ground.display();
    platform.display();

    //fill pink
    fill("lightblue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();


    polygon.display();

    sling1.display();
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
	
	}
	
function mouseReleased(){
		sling1.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(polygon.body, {x:100, y:100}) 
	 sling1.attach(polygon.body);
	}
  }



