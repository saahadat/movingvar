let cloudOneX = 50;

//custom variable for shooting stars
let lineXone = 0;
let lineYone = 0;

function setup() {
  createCanvas(1600, 720);
}

function draw() {
  background('navy');
  frameRate(15);

  

  // fill(0);
  // text(`${mouseX},${mouseY}`,20,20);
  stroke(0);
  fill(255);
  text(`mouseX:${mouseX},mouseY:${mouseY}\nframecount:${frameCount}`,20,20);

  fill(255);
  stroke("navy");
  circle(320,50,100);

  stroke("navy");
  fill("navy");
  circle(350,50,100);

  // stroke("navy");
  // fill("navy");
  // circle(320,50,100);
  cloudOneX = frameCount % width
  lineXone = random(0,width);
  lineYone = random(0,height/2);
  //hills
  stroke(50);
  fill(80);
  triangle(-40,500, 175,200, 550,500);
//cloud
stroke(180);
fill(255);

  ellipse(cloudOneX - 40, 100, 60, 20);
//hill 
stroke(50); 
fill(80);
  triangle(200,500, 500,50, 800,500);
  stroke('rgba(42, 51, 42, 0.56)');
  fill('rgb(50,76,50)');
  rect(0,500,1980,720);

  //clouds
  
  stroke(180);
  fill(255);
  ellipse(cloudOneX,50,80,40);
  
  ellipse(cloudOneX + 20, 150, 40, 10);

  //growing tree
//trunk
stroke('rgba(66, 51, 47, 0.7)')
fill("rgb(118,80,72)");
rect(80, 270, 25, 350);
//leaves
stroke('rgba(68, 99, 80, 0.25)')
fill("green");
triangle(20, 370, 85, 100, 170, 370);

//trunk
stroke('rgba(66, 51, 47, 0.7)');
fill("rgb(118,80,72)");
rect(460, 440, 23, 200);

//leaves
stroke('rgba(50, 87, 65, 0.25)');
fill("green");
triangle(350, 540, 470, 240 - (frameCount % 280)/2, 580, 540);

stroke("yellow");
  line(lineXone,lineYone,lineXone+50,lineYone-50);
}
