const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {

createCanvas(1000,500);

engine = Engine.create();
world = engine.world;

 // car = createSprite(100, 200, 40, 40);
 // car.shapeColor = color(255);
 // speed=random(55, 90);
 // weight=random(400, 1500);
 // wall = createSprite(700, 200, 30, 200);
  //wall.shapeColor= color(80, 80, 80);
 // car.velocityX = speed;

  base = new Ground(400, 350, 200, 20);
  base1 = new Ground(700, 200, 200, 20);
  block1 = new Box(340, 325, 30, 30);
  block2 = new Box(370, 325, 30, 30);
  block3 = new Box(400, 325, 30, 30);
  block4 = new Box(430, 325, 30, 30);
  block5 = new Box(460, 325, 30, 30);
  block6 = new Box(370, 295, 30, 30);
  block7 = new Box(400, 295, 30, 30);
  block8 = new Box(430, 295, 30, 30);
  block9 = new Box(400, 265, 30, 30);
  block10 = new Box(640, 175, 30, 30);
  block11 = new Box(670, 175, 30, 30);
  block12 = new Box(700, 175, 30, 30);
  block13 = new Box(730, 175, 30, 30);
  block14 = new Box(760, 175, 30, 30);
  block15 = new Box(670, 145, 30, 30);
  block16 = new Box(700, 145, 30, 30);
  block17 = new Box(730, 145, 30, 30);
  block18 = new Box(700, 115, 30, 30);

  hexagon = Bodies.circle(300, 200, 30, 30);
  World.add(world, hexagon);

  slingshot = new SlingShot(this.hexagon, {x:100, y:200});

  //wall.debug = true;
  //car.debug = true;

}

//var car, wall;
//var speed, weight;

function draw() {

  background(0);  

  Engine.update(engine);

  base.display();
  base1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  ellipse(hexagon.position.x, hexagon.position.y, 30, 30);

  slingshot.display();


  //car.collide(wall);
  
 // if(wall.x-car.x < (car.width+wall.width)/2) 
  //{
    //car.velocityX = 0;
    //var deformation=0.5 * weight * speed * speed/22509;
   // if(deformation>180)
    //{
   //   car.shapeColor = color(255, 0, 0);
   // }

    //if(deformation<180 && deformation>100)
   // {
      //car.shapeColor = color(230, 230, 0);
   // }
   // if(deformation< 100)
   // {
   //   car.shapeColor = color(0, 255, 0);
   // }

  //}
  //drawSprites();


}

function mousedragged() {

  Matter.Body.setPosition(hexagon.body, {x: mouseX, y:mouseY});

}

function mousereleased() {
  slingshot.fly();
  
}

function keyPressed() {
  if(keyCode == 32) {
    Matter.Body.setPosition(hexagon.body, {x:100, y:200})
    slingshot.attach(hexagon.body);
  }
}


