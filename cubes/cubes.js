//Max ellipse size
var maxEllipseSize = 50;
//Margin between ellipses
var margin = 50;

//Max number of the trail
var maxTrail = 10;

//Scale factor
var scaleFactor = 0.85;

//Size Line
var sizeLine = 15;

function setup() {
  createCanvas(800, 600);
  background(1);

}

function draw() {
translate(height/2,width/2);
	for(var i=1;i<width;i=i+width/10){	
		for(var j=1;j<height;j=j+height/10){
			var tam;
			tam = maxEllipseSize;
				//Loop for the trail
				for(var z=0;z<maxTrail;z++){
					//Size scaling
					tam= tam * scaleFactor;
					
					//Fill Color-Grayscale
					fill(tam*z+150);
					//Stroke Color-GrayScale
					stroke(tam*z,2);
					
					

					//Ellipse Trails		
					ellipse(i+ margin,j*tam+margin,tam,tam/z);				
					rotate(5);	
					
					//Line #1
					strokeWeight(5);
					line(width/2,height/2,width*i,height+j);
					rotate(5);
					//Line #2
					line(height/2,width/2,height*i,width+j);



			}
			
		}
}

}