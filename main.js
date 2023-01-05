function setup(){
video=createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(550,550);
canvas.position(560,150);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}

function draw(){
background('#0FF0FC');
fill('#000000');
stroke('#000000');
text("Archit",69,420);
textSize(difference);
}

function modelLoaded(){
console.log('poseNet is intialized');
}

function gotPoses(results){
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX="+noseX+"noseY="+noseY);
leftwristX=results[0].pose.leftWrist.x;
rightwristX=results[0].pose.rightWrist.x;
difference=floor(leftwristX-rightwristX);
console.log("leftwristX="+leftwristX +"rightwristX"+rightwristX +"difference"+difference);
}
}

noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;