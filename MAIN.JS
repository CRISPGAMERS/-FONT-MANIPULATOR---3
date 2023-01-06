noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    canvas=createCanvas(550,400);
    canvas.position(680,100);

    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(100,100)

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",getPoses);
}

function modelLoaded(){
    console.log("Pose Net model loaded");
}

function draw(){
background("white");
document.getElementById("font_size").innerHTML="The font size is - "+difference+" px";
fill("Green");
stroke("Green");
textSize(difference);
text("KARTIK",noseX,noseY);
}

function getPoses(results){
    if(results.length>0){
        console.log(results);
       noseX = results[0].pose.nose.x;
       noseY = results[0].pose.nose.y;

       leftWristX = results[0].pose.leftWrist.x;
       rightWristX = results[0].pose.rightWrist.x

       difference = Math.floor(leftWristX - rightWristX);

       
       console.log("Nose X = "+noseX);
       console.log("Nose Y = "+noseY);

       console.log("leftWrist X = "+leftWristX);
       console.log("rightWrist X = "+rightWristX);

       console.log("Difference = "+difference);
    }
}