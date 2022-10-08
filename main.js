function preload()
{

}
function setup()
{
    canvas = createCanvas(600, 550);
    canvas.position(700 , 310);
    cam = createCapture(VIDEO);
    cam.size(600, 600);
    cam.position(20, 240);
    posenet = ml5.poseNet(cam, modelLoaded);
    posenet.on('pose', gotResults);
}
function draw()
{

}
function modelLoaded()
{
    console.log("model Loaded");
}
function gotResults(results)
{
    if(results.length > 0)
    {
       console.log(results); 
    }
    
}