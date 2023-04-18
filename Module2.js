var fName = window.prompt("Enter your name: ");

document.getElementById("name").innerHTML = "<b>Your Name: </b>" + fName;
const piValue = 3.1415926
var myFavNum = window.prompt("What is your favorite number?: ");
var area = piValue * (myFavNum * myFavNum);

document.getElementById("output").innerHTML = 
"Hello " + fName + " you had entered " + myFavNum + " as your favorite number."+
" If that was the radius of a circle it would be " + area + "."
