// variable to hold the day of the week
var day;

switch(new Date().getDay())
{
    case 0:
        // where the value is 0 - 'Sunday'
        day = 'Sunday'
        break;

    case 1:
        // where the value is 1 - 'Monday'
        day = 'Monday'
        break;

     case 2:
        // where the value is 2 - 'Tuesday'
        day = 'Tuesday'
        break;
    
    case 3:
        // where the value is 3 - 'Wednesday'
		day = "Wednesday";
		break;

	case 4:
        // where the value is 4 - 'Thursday'
		day = "Thursday";
		break;

	case 5:
        // where the value is 5 - 'Friday'
		day = "Friday";
		break;

	case 6:
        // where the value is 6 - 'Saturday'
		day = "Saturday";
		break;
}

document.getElementById('output').innerHTML = "<h2>Today is <u>" + day + "</u></h2>";