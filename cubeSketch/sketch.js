var img;
var posX;
var poxY;

var arrImg = [];
function setup() {
  createCanvas(800,800);
  smooth();
  for(var i=1;i<=7;i++){
    arrImg[i] = loadImage("/img/" + i + ".png");
    arrImg[i].loadPixels();
  }
  posX = 0;
  posY = 0;
  //background(0);
}

function draw() {
  var numero = floor (random(1,7));
  var imageWidth = arrImg[numero].width;
  var imageHeight= arrImg[numero].height;
  
  
  

  if((posX == mouseX) && (posY == mouseY)){
    //Stop generating
    
  }
  else{
    if(posX != mouseX){
      //Aproach to mouseX position
      if(posX > mouseX){
        posX = posX - imageWidth;
      }else{
        posX = posX + imageWidth;
      }
    }
    if(posY != mouseY){
      //Aproach to mouseY position
      if(posY > mouseY){
        posY = posY - imageHeight;
      }else{
        posY = posY + imageHeight;
      }
    }
      
      
      
      var rotation = 90 * floor(random(1,3));
      translate(posX,posY);
      rotate(radians(rotation));
      text("POSX:"+posX + " POSY:" + posY + " ROTATION:" + rotation, posX, posY);
      //image(arrImg[numero],posX,posY);
      
  }
  
  
}

function numero (){
  
  return 
}