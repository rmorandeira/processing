function setup() {
  createCanvas(900,900);
  smooth();
}

function draw() {
  var tamano = random(120);
  background(255);
  A(50,50,150);
}

function A(x,y,size){
  
  //strokeWeight(s);
  line(x+size/2,y,x,y+size);
  line(x+size/2,y,x+size,y+size);
  var r = random(0,size);
  //line(hor,y+(size- 2*hor),x+size,y+(size- 2*hor));
  //line(hor,hor+(size/2),x+size,hor+(size/2));
  //line(x+r,y + (r - size/2),(x+size/2)+r,y+(r - size/2));
  line(x+r,y + (-2*r + size),(x+size/2)+(size/2)-r,y + (-2*r + size));
  
}