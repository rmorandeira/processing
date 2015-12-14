
var imgBackground;
var imgStep1;
var imgStep2;
var imgStep3;
var imgStep4;
var imgStep5;
var imgStep6;
var imgWrong;

//initialStep
var step;
var action="";

function preload() {
  imgBackground = loadImage("/img/background.jpg");
  imgStep1 = loadImage("/img/step1.jpg");
  imgStep2 = loadImage("/img/step2.jpg");
  imgStep3 = loadImage("/img/step3.jpg");
  imgStep4 = loadImage("/img/step4.jpg");
  imgStep5 = loadImage("/img/step5.jpg");
  imgStep6 = loadImage("/img/step6.jpg");
  imgWrong = loadImage("/img/wrong.jpg");

}

function setup() {
  createCanvas(300, 300);
  textFont("Helvetica");
  textSize("22");
  //textAlign(LEFT);
}
function keyPressed() {
  if (keyCode==BACKSPACE) {
    action="";
  }
}

function draw() {
  switch(step){
      case 0:
      initialStep();
      break;
      case 1:
      jumpLeft();
      break;
      case 2:
      stepRight();
      break;
      case 3:
      handHips();
      break;
      case 4:
      pelvicThrust();
      break;
      case 5:
      initialStep();
      break;
      default:
      instructions();
      break;
  } 
  textSize("22");
  text(action, width/2, 252);
}

function keyTyped() {
  print("STEP:" + step + " ACTION:" + action);
  if(keyCode== RETURN){
    if(action=='instructions' || 'help' || '?'){
      instructions();
    }
    if(action=="start"){
      initialStep();
    }
    if(action=='left' && step == 0){
        jumpLeft();
    }
    if(action=='right' && step== 1){
        stepRight();
    }
    if(action=='hips' &&  step==2){
        handHips();
    }
    if(action=='tight' &&  step==3){
        kneesTight();
    }
    if(action=='thrust'  &&  step==4){
        pelvicThrust();
    }
    if(action=='again'  &&  step==5){
        initialStep();
    }
    action="";
  }else{
     action += key;

  }
}
function instructions(){
  image(imgBackground,0,0);
  textSize("10");
  fill(0,0,0);
  text("Ready for the Time Warp Dance?¿",11,51);
  text("Just type the BOLD text for the next step",11,71);
  text("Type start now! And Start the Time Warp Dance!!",11,91);
  text("If you need help, just type 'instructions','help' or '?'",11,111);
  fill(255,124,0);
  text("Ready for the Time Warp Dance?¿",10,50);
  text("Just type the BOLD text for the next step",10,70);
  text("Type start now! And Start the Time Warp Dance!!",10,90);
  text("If you need help, just type 'instructions','help' or '?'",10,110);
}

function initialStep() {
   step=0;
  image(imgStep1, 0, 0);
}
function jumpLeft() {
  step=1;
  image(imgStep2, 0, 0);
}
function stepRight() {
  step=2;
  image(imgStep3, 0, 0);
}
function handHips() {
  step=3;
  image(imgStep4, 0, 0);
}
function kneesTight() {
  step=4;
  image(imgStep5, 0, 0);
}
function pelvicThrust() {
  step=5;
  image(imgStep6, 0, 0);
}
function error() {
  image(imgWrong, 0, 0);
}