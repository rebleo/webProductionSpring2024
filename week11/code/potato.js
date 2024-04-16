console.log("potato!")

let theWhy = 600;

function setup() {
    //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  //60 frames per seccond
  // the canvas is red
  background(220, 0,0);
  ellipse(100,theWhy--, 50, 10);
  rect(mouseX,mouseY, 100)
}