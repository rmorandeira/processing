var action  = "";
var imgStep1;
var imgStep2;
var imgStep3;
var imgStep4;
var imgStep5;
var imgStep6;
var imgWrong;

//Step 1 completion
var step1 = false;
//Step 2 completion
var step2 = false;
//Step 3 completion
var step3 = false;
//Step 3 completion
var step3 = false;
//Step 4 completion
var step4 = false;
//Step 5 completion
var step5 = false;
//Step 6 completion
var step6 = false;

function preload(){
  imgStep1 = loadImage("/img/step1.jpg");
  imgStep2 = loadImage("/img/step2.jpg");
  imgStep3 = loadImage("/img/step3.jpg");
  imgStep4 = loadImage("/img/step4.jpg");
  imgStep5 = loadImage("/img/step5.jpg");
  imgStep6 = loadImage("/img/step6.jpg");
  imgWrong = loadImage("/img/wrong.jpg");
  
}

function setup() {
  createCanvas (300,300);
  textFont("Helvetica");
  textSize("22");
  textAlign(CENTER);
  image(imgStep1,0,0);
}
function keyPressed (){
  if(keyCode == BACKSPACE){
    action = "";
  }
}
  
function keyTyped (){
  
  action += key;
  
}
function draw() {
   
  
   switch(action){
    case 'left':
      /*It's just a jump to the left.*/
      image(imgStep2,0,0);
      step1 = true;
      step2 = false;
      step3 = false;
      step4 = false;
      step5 = false;
      step6 = false;
      action = "";
    break;
    case 'right':
      /*And then a step to the right.*/
      if(step1){
         step1 = false;
         step2 = true;
         step3 = false;
         step4 = false;
         step5 = false;
         step6 = false;
         image(imgStep3,0,0);
         action = "";
      }
    break;
    case 'hips':
      /*With your hand on your hips.*/
       if(step2){
         step1 = false;
         step2 = false;
         step3 = true;
         step4 = false;
         step5 = false;
         step6 = false;
         image(imgStep4,0,0);
         action = "";
      }
    break;
    case 'knees':
      /*You bring your knees in tight*/
      if(step3){
         step1 = false;
         step2 = false;
         step3 = false;
         step4 = true;
         step5 = false;
         step6 = false;
         image(imgStep5,0,0);
         action = "";
      }
    break;
    case 'tight':
      /*But it's the pelvic thrust*/
        if(step4){
         step1 = false;
         step2 = false;
         step3 = false;
         step4 = false;
         step5 = true;
         step6 = false;
         image(imgStep6,0,0);
         action = "";
      }
    break;
    case 'timeWarp':
      /*Let's do the Time Warp again*/
      if(step6){
         step1 = false;
         step2 = false;
         step3 = false;
         step4 = false;
         step5 = false;
         step6 = true;
         image(imgStep6,0,0);
         action = "";
      
    }
    break;
    default:
      /*Oh Oh,Wrong move*/
      //image(imgWrong,0,0);
    break;
  }
    
  text(action,0 ,222,width,30);
}
