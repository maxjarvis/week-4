
function setup() {
  createCanvas(800, 400);
  background(204);
  strokeWeight(3);
}

var x = 150
var y = 150
var d = 40

function draw() {
  for(var i = 1; i < 7; i++) {
    noFill();
    ellipse(x, y, d*i, d*i)
  }
  for(var i = 1; i < 7; i++) {
    noFill();
    ellipse(x*3, y, d*i, d*i)
  }
}
