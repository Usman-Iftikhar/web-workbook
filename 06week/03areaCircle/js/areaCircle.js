"use strict"

var r = parseInt(prompt("Enter the radius of the circle: "));
//var D = parseInt(prompt("Enter the Diameter of the circle: "));
var area = Math.PI*Math.pow(r,2);
area = area.toFixed(2);

document.write("The radius of the circle is: " + r + "<br>");
document.write("<hr>"+"The area of the area is: " + area);
