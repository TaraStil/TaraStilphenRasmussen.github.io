function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
  
    //validate input
    if (billAmt === "" || serviceQual == 0) {
      alert("Please enter values");
      return;
    }

    if (billAmt <= 5){
        alert("Bill too low")
        return;
    }

    if (billAmt >= 500){
        alert("Bill too large")
        return;
    }
  
    //Calculate tip
    var total = (billAmt * serviceQual);
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    var Qual = (serviceQual * 100)
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("Closing").innerHTML = 
    "Hello " + " you had entered $" + billAmt + " as your total bill."+
    "You also selected " + Qual + "% as your tip percentage. " +
    "The tip was calculated to be - $" + total
  
  }

  //click to call function
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  }

