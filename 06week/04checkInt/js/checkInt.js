"use strict"

var int = prompt("Enter an integer between 20 and 400:");

var compare = function(x) {
  if (x >= 20 && x <= 100) {
    return"The integer is between 20 and 100.";
  }
  else if (x > 100 && x <= 400) {
    return"The integer is between 101 and 400.";
  }
  else {
    return"The integer you entered is not between 20 and 400.";
  }
}

var result = compare(int);
document.write("You picked: " + int + "<br>");
document.write(result);
