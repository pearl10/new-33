const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var particles =[];
var plinkos=[];
var score=0;
var particle;
var turn=0;
var  division=[];
var  divisionHeight=300
var gamestate;
var play;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  for(var k=0;k<=width;k=k+80){
division.push( new Division (k,height-divisionHeight/2,10,divisionHeight))
 }

 

for(var j=20;j<width;j=j+50){
  plinkos.push(new Plinko(j,75))

}
for(var j=40;j<width;j=j+50){
  plinkos.push(new Plinko(j,150))

}
for(var j=20;j<width;j=j+50){
  plinkos.push(new Plinko(j,250))

}
for(var j=40;j<width;j=j+50){
  plinkos.push(new Plinko(j,350))

}
for(var j=20;j<width;j=j+50){
  plinkos.push(new Plinko(j,450))

}

}

function draw() {
  
  Engine.update(engine);
  background(0);
  text("score:"+score,350,40)  
  text("500",30,500)  
  text("500",110,500)  
  text("100",190,500)  
  text("100",270,500)  
  text("200",350,500)  
  text("200",430,500)  
  for(var k=0;k<division.length;k++) {
    division[k]. display ()}
  
   for(var j =0;j<plinkos.length;j++){
   plinkos[j].display();

   }
   if(frameCount%20===0){
    particles.push(new Particle(random(width/2-10,width/2+10),0))
    
  }
   for(var j =0;j<particles.length;j++){
    particles[j].display();
 
    } 
    if(particle!=null)
    { 
particle.display();

      

      if(particle.body.position>750){
    
    
    if(particle.body.position<300){
    score=score+500;
    particle=null;
    if(count>5)gamestate="end";
    }
  } 
  }
    drawSprites();
}
