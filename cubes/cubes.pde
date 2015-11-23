//Cube max width
float sizeCube = 150;

//Margin between cubes
int margin = 20;

//Max number of cube trail
int maxTrail = 2;

//Scale factor
float scaleFactor = 0.8;

void setup(){
   size(800,600);
  
}

void draw(){

    for(int j=0;j<height;j+=sizeCube){
       for(int i=0;i<=width;i+=sizeCube){
            
       translate(i+sizeCube,j+sizeCube);
       float tam = sizeCube;
       for(int z=0;j<maxTrail;z++){
         tam = tam*scaleFactor;
         fill(tam*z);
         rotate(3);     
         
         rectMode(CENTER);
         stroke(255,80);
         rect(0,0,tam*z,tam*z);
         arc(0,0,tam,tam,0,PI+QUARTER_PI);  
       }
       
     }
   }

  
}