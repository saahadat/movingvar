let cloudOneX = 50;

//custom variable for shooting stars
let lineXone = 0;
let lineYone = 0;

function setup() {
  createCanvas(1600, 720);
}

function draw() {
  background('navy');
  
  // fill(0);
  // text(`${mouseX},${mouseY}`,20,20);
  
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
  
  //hills
  stroke(0);
  fill(80);
  triangle(-40,500, 175,200, 550,500);
  triangle(200,500, 500,50, 800,500);

  fill('rgb(50,76,50)');
  rect(0,500,1980,720);

  //clouds
  cloudOneX = frameCount % width

  fill(255);
  ellipse(cloudOneX,50,80,40);
  ellipse(cloudOneX - 40, 100, 60, 20);
  ellipse(cloudOneX + 20, 150, 40, 10);

  //growing tree
//trunk
fill("rgb(118,80,72)");
rect(80, 270, 25, 350);
//leaves
fill("green");
triangle(20, 370, 85, 100, 170, 370);

//trunk
fill("rgb(118,80,72)");
rect(460, 440, 23, 200);
//leaves
fill("green");
triangle(350, 540, 470, 240 - frameCount % 290, 580, 540);

}
