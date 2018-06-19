"use strict"

var n1 = prompt("Enter the first integer");
var n2 = prompt("Enter the second integer");

var compare = function(x1,x2) {
  if (Math.abs(x1-100) === Math.abs(x2-100)) {
    return "Both integers are equally apart from 100.";
  }
  else if (Math.abs(x1-100) > Math.abs(x2-100)){
    return "The second integer is closer to the value of 100.";
  }
  else {
    return "The first integer is closer to the value of 100.";
  }
}

var result = compare(n1,n2);
document.write("The first integer was :" + n1 + "<br>");
document.write("The second integer was :" + n2 + "<br>");
document.write(result);
