const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var pig1;
var backgroundImg,platform1,platform2,platform3;
var bird, slingshot;
var box6,box7;
var box8,box9,box10,box11,box12;
function preload() {
    backgroundImg = loadImage("sprites/bg2.webp");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(150, 305, 300, 170);
    
    platform2 = new Ground(500,300,200,20);

    platform3 = new Ground(1100,100,100,20);

    pig1 = new Pig(1100,75);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
   
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box6 = new Box(810,230,70,70);
    box7 = new Box(810,320,70,70);
    box4 = new Box(920,240,70,70);




    box8 = new Box(560,240,70,70);
    box9 = new Box(450,240,70,70);
    

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    box10 = new Box(510,160,70,70);
   

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    rectMode(CENTER);
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   
    log1.display();

    box3.display();
    box4.display();
    
    log3.display();

    box5.display();
    

    bird.display();
    platform1.display();
    platform2.display();
    platform3.display();
    box6.display();
    box8.display();
    box7.display();
    pig1.display();
    box9.display();
    box10.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}