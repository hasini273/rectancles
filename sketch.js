var fixedRect, movingRect,rect1,rect2,rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(100, 100, 50, 80);
  rect2 = createSprite(200, 100, 50, 80);
  rect3 = createSprite(300, 100, 50, 80);

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  bounceoff(movingRect,fixedRect);
  if(isTouching(rect1,movingRect)){
    movingRect.shapeColor = "red";
    rect1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    rect1.shapeColor = "green";
  }
  

  drawSprites();
}
