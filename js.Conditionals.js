// if / else if statements are multiple alternative statements
		if(expression)
		{
			statement(s);
		}
		else if(expression)
		{
			statement(s);
		}
		else
		{
			statements(s);
        }
		
// given the values for the following variables
var x = 1;
var y = 10;

// output the values of x and y
console.log(`x = ${x}`);
console.log(`y = ${y}`);

// Checks if one value is equal to another - using strict type comparison
if (x === "1") {
    console.log("x is equal to 1");
}
  
// using non-strict comparison
if (x == "1") {
    console.log("x is equal to 1");
}

// Checks if one value is less than another
if (x < y) {
    console.log("x is less than y");
}
  
  // Checks if one value is greater than another
if (y > x) {
    console.log("y is greater than x");
}

// Checks if a value is greater than or equal to another
if (x >= 1) {
    console.log("x is greater than or equal to 1");
}

// Checks for two conditions to be met using &&
if (x === 1 && y === 10) {
    console.log("Both values returned true");
}
  
// Checks if either of two conditions is met using ||
if (x < 45 || y < 5) {
    console.log("One or the other statements were true");
}

// if-else if
if (y < 5) {
  console.log("x is less than 10 and y is less than 5");
}
else if (y === 5) {
  console.log("x is less than 10 and y is equal to 5");
}
else {
  console.log("x is less than 10 and y is greater than 5");
}

// Nested if statements
if (x < 10) {
    if (y < 5) {
      console.log("x is less than 10 and y is less than 5");
    }
    else if (y === 5) {
      console.log("x is less than 10 and y is equal to 5");
    }
    else {
      console.log("x is less than 10 and y is greater than 5");
    }
}