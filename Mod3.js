
var text = "";
for (var i = 0; i <= 10; i++)
{
    if( i % 2 == 0)
        text += "Count " + i + " is even <br>";
    else
        text += "Count " + i + " is odd <br>";
}


document.getElementById("OddsEvens").innerHTML = text;


function forloopDemo()
{
    var text = "";

    var num = document.getElementById("input").value;
    
    {

        num = parseInt(num);
        for(var i = 1; i <= num; i++)
        {
            text += "Loop - " + i + "<br>";
        }
        document.getElementById("YourNum").innerHTML = text;
    }
}

function forEachDemo()
{
  
    let arr = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];


    var text = "";

  
    arr.forEach((item, index) => {
        if(index == arr.length - 1)
            text += item;
        else
            text += item + ", ";
    });
    document.getElementById("Array").innerHTML = text;
}