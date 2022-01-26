objects=[];
status="";
function setup()
{
    canvas=createCanvas(480,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function start()
{
    objectdetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status: detecting objects";
}
function modelloaded()
{
    console.log("model is loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function gotresult(error,results)
{
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}
function draw()
{
    image(video,0,0,480,300);
}