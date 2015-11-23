/*
  
  Date:21/10/2015 (McFly! Where are you?¿¿?)

  Author: rmorandeira@gmail.com
  
  SketchName: Simple webcam

  Description:
  Initializes the webcam capture, and shows the capture stream in a small window
  
  
*/

import processing.video.*;

Capture cam;

void setup() {
  size(640, 480,P3D);

  String[] cameras = Capture.list();
  
  if (cameras.length == 0) {
    println("There are no cameras available for capture.");
    exit();
  } else {
    println("Available cameras:");
    for (int i = 0; i < cameras.length; i++) {
      println(cameras[i]);
    }
    
    // The camera can be initialized directly using an 
    // element from the array returned by list():
    cam = new Capture(this, cameras[0]);
    cam.start();     
  }      
}

void draw() {
  if (cam.available() == true) {
    cam.read();
  }
  invert();
  
  // The following does the same, and is faster when just drawing the image
  // without any additional resizing, transformations, or tint.
  //set(0, 0, cam);
}

void invert(){
   
  //image(cam, 0, 0);
  background(0);
    loadPixels();
    cam.loadPixels();
  for(int x=0;x<width;x++){
    for(int y=0;y<height;y++){
      int pos = x+y*width;
      
      pixels[pos] = cam.pixels[pos];
    }
    
  
  }
  
}