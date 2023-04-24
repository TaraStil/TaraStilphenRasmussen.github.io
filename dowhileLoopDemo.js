// variable to hold an empty text string
var text = "";

// variable that controls the loop below
var i = 1;

// do-while loop that executes until the value of i = 20
do
{
    // add on to the text value
    text += "This is iteration #" + i + "<br>"

    // increment the value of i
    i++;
}while(i <= 20);

// once the loop concludes, display the output in the id named 'output'
document.getElementById('output').innerHTML = text;
