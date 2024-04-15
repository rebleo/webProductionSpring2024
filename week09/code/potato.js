console.log("javascript!");

//variables
// data types
// numeric, string (think url and file paths!!!!), pixel, boolean
let theNumber = 50;
let theName = "rebecca"
console.log(theNumber * 2)

let theBody;

theBody = document.querySelector("body");
// i want the body's background to change
// when the viewer clicks the button
let theButton = document.querySelector("button")

// when the view clicks
// the action is fired
theButton.addEventListener('click', theAction)

function theAction() {
    console.log("HELLO WORKLDS!! you acted! you cliked the button!")
    theBody.style.backgroundColor = "orange"
}