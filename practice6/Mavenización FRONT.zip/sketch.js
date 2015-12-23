function setup() {
  createCanvas(900,900);
}

function draw() {
  
}

function A(x,y,size,stroke){
  
  stroke(5);
  line(x+size/2,y,x,y+size);
  line(x+size/2,y,x+size,y+size);
  line(x-size/4,y+size/2,x+size/4,y+size/2);
}