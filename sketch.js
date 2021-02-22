var car,wall,weight,speed
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight =random(1500,400);
  car = createSprite(50,200,20,20);
  
 wall = createSprite(1500,200,10,width/2);
 
 car.velocityX = speed
}

function draw() {
  background(255,255,255);
  if(wall.x-car.x < (car.width + wall.width)/2){
    var deformation = 0.5 * weight * speed * speed/22500
    car.velocityX=0;
  }
  if(deformation>180){
 car.shapeColor=color(255,0,0);
 }
 if (deformation<180 && deformation>100){
 car.shapeColor=color(230,230,0);
 }
 if(deformation<100){
  car.shapeColor=color(0,255,0); 
 }
 

    
  drawSprites();
}
