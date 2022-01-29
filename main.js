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
    if(status!=""){
        objectdetector.detect(video,gotresult);
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="status:objects detected";
            document.getElementById("objects").innerHTML="number of objects detected are: "+objects.length;
            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
