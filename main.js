function preload(){
    
}
function setup(){
    canvas=createCanvas(300,300);
    videoFromDhanush=createCapture(VIDEO);
    videoFromDhanush.hide();
    canvas.center();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EgAR1821T/model.json',modelLoaded);
}
function modelLoaded(){
console.log('Model Loaded');
}
function draw(){
image(videoFromDhanush,0,0,300,300);
classifier.classify(videoFromDhanush , gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
console.log(results);
document.getElementById("result_object").innerHTML=results[0].label
document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}