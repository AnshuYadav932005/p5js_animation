let x, y;
let angle = 0;
let r = 150;

let shiftingangle = [];
let numAxis = 4;
let x2 = [];
let y2 = [];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  for (let i = 0; i < numAxis; i++) {
    shiftingangle[i] = i * (90 / numAxis);
  }
}

function draw() {
  background(220);
  stroke(0);
  translate(width / 2, height / 2);

  // Calculate main red circle position
  x = r * cos(angle);
  y = r * sin(angle);

  // Outer circle
  noFill();
  ellipse(0, 0, r * 2, r * 2);

  // Red moving circle
  fill(255, 0, 0);
  ellipse(x, y, 20, 20);

  // Cross lines
  line(r, 0, -r, 0);
  line(0, r, 0, -r);

  // Draw white circles and axes
  for (let i = 0; i < numAxis; i++) {
    x2[i] = r * cos(angle + shiftingangle[i]);
    y2[i] = r * sin(angle + shiftingangle[i]);

    push();
    rotate(-shiftingangle[i]);
    stroke(0);
    line(r, 0, -r, 0);
    line(0, r, 0, -r);
    fill(255);
    ellipse(x2[i], 0, 20, 20);
    ellipse(0, y2[i], 20, 20);
    pop();
  }

  angle++;
}
