const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


var ground;



function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  ground = new Base(300,450,20,30)



}

function draw() {
  background(51);
  Engine.update(engine);

}
