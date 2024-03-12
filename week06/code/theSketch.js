console.log("javascript");

// runs once
function setup(){
    console.log("p5");
    createCanvas(windowWidth, windowHeight);
    background(0,0,200)
}

//runs 60 frames per second
function draw(){
    noStroke();
    ellipse(mouseX,mouseY,100,50);
   
}