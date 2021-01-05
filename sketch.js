const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, stand1, stand2;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18,
box19, box20, box21, box22, box23, box24, box25; 

var polygon;

var slingshot;

var score = 0;

var backgroundImg;
var bg = "bg.png";

function preload()
{
  getBackgroundImage();
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
 stand1 = new Ground(800,600,300,20);
 
 //(level 1)
 box1 = new Box(710,570,30,40);
 box2 = new Box(740,570,30,40);
 box3 = new Box(770,570,30,40);
 box4 = new Box(800,570,30,40);
 box5 = new Box(830,570,30,40);
 box6 = new Box(860,570,30,40);
 box7 = new Box(890,570,30,40);
 //(level 2)
 box8 = new Box(740,530,30,40);
 box9 = new Box(770,530,30,40);
 box10 = new Box(800,530,30,40);
 box11 = new Box(830,530,30,40);
 box12 = new Box(860,530,30,40);
 //(level 3)
 box13 = new Box(770,490,30,40);
 box14 = new Box(800,490,30,40);
 box15 = new Box(830,490,30,40);
 //(level 4)
 box16 = new Box(800,450,30,40);
 
 stand2 = new Ground(1200,400,300,20);  
 
 //(level 1)
 box17 = new Box(1140,370,30,40);
 box18 = new Box(1170,370,30,40);
 box19 = new Box(1200,370,30,40);
 box20 = new Box(1230,370,30,40);
 box21 = new Box(1260,370,30,40);
 //(level 2)
 box22 = new Box(1170,330,30,40);
 box23 = new Box(1200,330,30,40);
 box24 = new Box(1230,330,30,40);
 //(level 3)
 box25 = new Box(1200,290,30,40);
 
 polygon = new Polygon(300,550,60);
 slingshot = new SlingShot(polygon.body,{x:300, y:550});

 Engine.run(engine);
  
}


function draw() {
  if(backgroundImg)
  rectMode(CENTER);
  background("backgroundImg");
  
 
  
  stand1.display();
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
  box14.display();
  box15.display();
  box16.display();

  stand2.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  
  polygon.display();
  slingshot.display();
  
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();





  text("SCORE: " + score,75,75);
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
    
    }
    
function mouseReleased(){
    slingshot.fly();   
    
    
    }

    function keyPressed(){
      if(keyCode === 32){
          slingshot.attach(polygon.body);
      }
  }

  async function getBackgroundImage() {
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if(hour>=06 && hour<=19){
    bg = "bg.png"
    
    } else 
    {
    bg = "bg2.png"
    
    }
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
    }
    

