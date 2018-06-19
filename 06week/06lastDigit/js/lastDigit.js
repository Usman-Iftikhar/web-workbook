"user strict"

var n1 = prompt("Enter the first positive integer");
var n2 = prompt("Enter the second positive integer");
var n3 = prompt("Enter the third positive integer");

var n1Last = n1%10;
var n2Last = n2%10;
var n3Last = n3%10;

var compare = function(x1,x2,x3) {
  if (x1===x2 && x2===x3) {
    return "The last digit of the three integers is the same.";
  }
  else {
    return "The last digit of the three integers is not the same.";
  }
}

var result = compare(n1Last, n2Last,n3Last);
document.write("The first integer was: " + n1 + "<br>");
document.write("The second integer was: " + n2 + "<br>");
document.write("The third integer was: " + n3 + "<br>");
document.write("<hr>" + result);
