//simple output function 
function printHello()
{
    document.getElementById("printHello").innerHTML = " Hello There!";
}

//call the function 
printHello();

//function takes two numbers and adds them 
function addition(a, b)
{
    return a+b
}

let sum = addition(3, 5);

document.getElementById("sumResult").innerHTML = "3 + 5 = <b> " + sum + " <b> ";

//JS built in Functions
let longDecimal = 112.32136165;
let roundedDecimal = Math.floor(longDecimal);
document.getElementById("rounded").innerHTML = longDecimal + " rounded down using .floor () function = " + roundedDecimal;
