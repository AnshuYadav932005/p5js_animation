let r=150;
let x,y;
let angle;
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(200);


  translate(200,200);
  circle(0, 0, r*2);
  angle=map(mouseX,0,400,0,360);
  x=r*cos(angle);
  y=r*sin(angle);


  x2=r*cos(angle+30);
  y2=r*sin(angle);

  line(r,0,-r,0);
  line(0,r,0,-r);
  // push();
  // rotate(-30);
  // line(r,0,-r,0);
  // line(0,r,0,-r);
  // pop();
  ellipse(x,y,20,20);
  push();
    rotate(-30);
    line(r,0,-r,0);
    line(0,r,0,-r);
    ellipse(x2,0,20,20);
  pop();
  
  



  

  

  // Draw a circle at coordinates (0, 0).
  
}