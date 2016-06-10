import processing.serial.*;

int[] blueBalloon;
int[] yellowBalloon;
int[] greenBalloon;
int[] redBalloon;
int[] fucsiaBalloon;
int[] orangeBalloon;
int[] pinkBalloon;
int[] strongRedBalloon;

int maxBalloon;
int balloonSize;
PImage img;

Serial myPort;  // Create object from Serial class
String val;     // Data received from the serial port

String mapBalloons;
void setup(){
  balloonSize =20;
    size(800,600);
  
  //Max size of balloon list
  maxBalloon = 40;
  
  
  blueBalloon = new int[maxBalloon];
  yellowBalloon = new int[maxBalloon];
  greenBalloon = new int[maxBalloon];
  redBalloon  = new int[maxBalloon];
  fucsiaBalloon  = new int[maxBalloon];
  orangeBalloon  = new int[maxBalloon];
  pinkBalloon  = new int[maxBalloon];
  strongRedBalloon  = new int[maxBalloon];
  
  img = loadImage("image.bmp");
  
  // I know that the first port in the serial list on my mac
  // is Serial.list()[0].
  // On Windows machines, this generally opens COM1.
  // Open whatever port is the one you're using.
  String portName = "/dev/ttyUSB0"; //change the 0 to a 1 or 2 etc. to match your port
  myPort = new Serial(this, portName, 9600); 

  mapBalloons = "2\n";
} //<>//


void draw(){
//noLoop();
mapBalloons = str(img.width) ;
translate(width/4,balloonSize);
  for (int i = 0;i<img.width;i++){ //<>//
    for(int j = 0;j<img.height;j++){
      //print("\nColor:" + img.get(i,j));
      fill(img.get(i,j));
          ellipse(i*25,j*25,balloonSize,balloonSize);
          //aqui viene la esteper
          mapBalloons = mapBalloons + "," + i + "," + j + ",c" + getBalloon(img.get(j,i));
          
          }
    }
    mapBalloons = mapBalloons + "\n";
    print("mapa:" +  mapBalloons);
    myPort.write(mapBalloons);
}

String getBalloon(int c){
  String col="";
  switch (c){
    //Blue
    case -15192939:
      col="0";
    break;
    //
    case -1184996:
      col="1";
    break;
    //Green
    case -16209408:
      col="2";
    break;
    //Fucsia
    case -1758261:
     col="3";
    break;
    //StrongRed
    case -65519:
      col="4";
    break;
    //Red
    case -4317926:
      col="5";
    break;
    //Orange
    case -29948:
      col="6";
    break;
    //Pink    
    case -48270:
      col="7";
    break;
  }
  return col;
}

void populateLists(){
}