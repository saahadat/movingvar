let cloudOneX = 50;

//custom variable for shooting stars
let lineXone = 0;
let lineYone = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('navy');
  
  // fill(0);
  // text(`${mouseX},${mouseY}`,20,20);
  
  fill(255);
  text(`mouseX:${mouseX},mouseY:${mouseY}`,20,20);

  fill(255);
  stroke("navy");
  circle(320,50,100);

  stroke("navy");
  fill("navy");
  circle(350,50,100);

  // stroke("navy");
  // fill("navy");
  // circle(320,50,100);
  
  stroke(0);
  fill(80);
  triangle(-40,300, 75,100, 250,300);
  triangle(100,300, 300,100, 500,300);

  fill('rgb(50,76,50)');
  rect(0,300,400,100);

  cloudOneX = frameCount % width

  fill(255);
  ellipse(cloudOneX,50,80,40);
  ellipse(cloudOneX - 40, 100, 60, 20);
  ellipse(cloudOneX + 20, 150, 40, 10);

  //growing tree
//trunk
fill("rgb(118,80,72)");
rect(40, 270, 15, 50);
//leaves
fill("green");
triangle(25, 270, 45, 240, 70, 270);

//trunk
fill("rgb(118,80,72)");
rect(340, 330, 15, 50);
//leaves
fill("green");
triangle(325, 330, 345, 240 - frameCount % 290, 370, 330);

}
