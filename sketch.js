const Engine = Matter.Engine 
const  World = Matter.World 
const  Bodies = Matter.Bodies 

var backgroundImg



var girl, gImg 
var boy, bImg 
var  mImg
var  sImg
var hgirl ,hgImg 
var hboy, hImg
var flake

function preload (){

bg = loadImage ("snow1.jpg") 
bImg = loadImage ("boy.png")
gImg = loadImage ("girl.png")
mImg = loadImage ("boom.png")
sImg = loadImage ("snowman.png")
hgImg = loadImage ("happygirl.png")
hImg = loadImage ("happyboy.png")
//getbgImg ()

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  Engine.run(Engine);


  boy = createSprite (100,600,100,100)
  boy.addImage ("boy",bImg)
  boy.scale = 1.5

  girl = createSprite (1300,600,100,100)
  girl.addImage ("girl",gImg)
  girl.scale = 1.5

  hboy = createSprite (1000,600,100,100)
  hboy.addImage ("boy",hImg)
  hboy.scale = 0.6
  hboy.visible = false

  hgirl = createSprite (500,600,100,100)
  hgirl.addImage ("girl",hgImg)
  hgirl.scale = 0.6
  hgirl.visible = false

  flake = new Snow
}



function draw() {
//if(backgroundImg)
  background(bg);  

  Engine.update (engine)
  if(boy.x - girl.x > (boy.width - girl.width)/2){
   boy.addImage("change",mImg)
   boy.changeImage ("change")
   boy.scale = 0.4
   girl.visible = false
  }
 boy.display ()
 girl.display ()
 hboy.display ()
 hgirl.display ()

flake.display ()



}

function keyPressed (){

  if(keyCode === LEFT_ARROW){
    boy.x =boy.x+60
    girl.x = girl.x-60

  }

  if (keyCode === 32) {
   girl.visible = true
   girl.addImage("snowman",sImg)
   girl.changeImage ("snowman")
   girl.position.x = 750
   girl.position.y = 500
   boy.visible = false
   hgirl.visible = true
   hboy.visible = true
  }

}