/*
  
  Date:20/10/2015 (McFly! we are waiting you!)

  Author: rmorandeira@gmail.com
  
  SketchName: Linear Sketchs

  Description:
  A simple processing sketch, draws a line with a random length between minLen,maxLen values
  height,width defines the size of the window
  The line can grown up in 8 directions (UP,DOWN,LEFT,RIGHT,RIGHT+UP,RIGHT+DOWN,LEFT+UP,LEFT+DOWN)
  and never can repeat the direction of the previous iteration. Also cant exceed de limits defined
  by the heigth and width.
  
  
*/

int height = 640;
int width = 480;
//Max Length line (px)
int maxLen = 200;
//Min lenght line (px)
int minLen = 40;

//Initial axis X
int posX;
//Initial axis Y
int posY;
int movimientoAnterior = 0;

void setup() {
  size(640, 480);
  posX = height /2;
  posY = width / 2;
}


void draw () {

  //positions a pixel centered

  
  /* for(int i=0;i<5;i = i +1){
   
   */
  println("posicion:(" + posX + ")("+ posY + ")");
  float movimiento = random(8);
  int len = parseInt(random(minLen, maxLen));

  switch(parseInt(movimiento)) {
    //Line UP
  case 0:
    {     
      if (movimientoAnterior !=1) {
        if(isInside(posX-len, posY)){
          line(posX, posY, posX-len,posY);           
          posX = posX-len;          
        }
        movimientoAnterior = 0;
      }
    }
    break;
    //Line Down
  case 1:
    {

      if (movimientoAnterior !=0) {        

        if(isInside(posX+len, posY)){        
        line(posX, posY, posX+len, posY);      
        posX = posX+ len;
        movimientoAnterior = 1;
        }
      }
    }
    break;
    //Line Left
  case 2:
    {
      if (movimientoAnterior !=3) {        
        if(isInside(posX, posY-len)){        
        line(posX, posY, posX, posY-len);
        posY=posY-len;
        movimientoAnterior = 2;
        }
      }
    }
    break;
    //Line right
  case 3:
    {
      if (movimientoAnterior !=2) {
        if(isInside(posX, posY+len)){
        line(posX, posY, posX, posY+len);     
        posY=posY+len;
        movimientoAnterior = 3;
        }
        
      }
    }
    break;   
    //Line up+right
  case 4:
    {
      if (movimientoAnterior !=7) {
        if(isInside(posX-len, posY+len)){
        line(posX, posY, posX-len, posY+len);
        posX = posX-len;
        posY=posY+len;
        movimientoAnterior = 4;
        }
        
      }
    }
    break;   
    //Line down+right
  case 5:
    {

      if (movimientoAnterior !=6) {
        if(isInside(posX+len, posY+len)){
        line(posX, posY, posX+len, posY+len);     
        posX = posX+len;
        posY=posY+len;
        movimientoAnterior = 5;
        }
        
      }
    }
    break;   
    //Line up+left
  case 6:
    {
      if (movimientoAnterior !=5) {
        if(isInside(posX-len, posY-len)){
          line(posX, posY, posX-len, posY-len);     
          posX = posX-len;
          posY = posY-len;
          movimientoAnterior = 6;
        }
       
      }
    }
    break;   
    //Line down+left
  case 7:
    {
      if (movimientoAnterior !=4) {
        if(isInside(posX+len, posY-len)){
        line(posX, posY, posX+len, posY-len);     
        posX = posX+len;
        posY = posY-len;
        movimientoAnterior = 7;        
        }
        
      }
    }
    break;
  }

}


boolean isInside (int x, int y) {
  if (x <0 || x > height)
    return false;
  if (y <0 || y > width)
    return false;
  return true;
}