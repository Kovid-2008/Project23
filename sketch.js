const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player,computer;
var playerbase,computerbase;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
    playerbase = new Player(200,height/2,100,100);
    computerbase = new Computer(width-200,height/2,100,100);
    player = new Body(200,playerbase.y-100,50,100);
    computer = new Body(width-200,computerbase.y-100,50,100);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerbase.show();
   computerbase.display();

   //display Player and computerplayer
  player.draw();
  computer.draw();

}
