'use strict';

document.addEventListener("DOMContentLoaded", function(event) {

  function addNumber(num) {
    document.querySelector("#results").value += num;
  }

  function clearResults() {
    document.querySelector("#results").value = "";
  }

  function addition() {
    document.querySelector("#results").value += "+";
  }

  function subtraction() {
    document.querySelector("#results").value += "-";
  }

  function multiplication() {
    document.querySelector("#results").value += "*";
  }

  function PlusMinus() {
    document.querySelector("#results").value += "*-1";
    equals();

  // Another method
  /*let current = document.querySelector("#results").value; // sotre the value on the calculator as 'current'
  if (current.substring(0, 1) == '-') { // if the first index of current is '-', then remove the first index
    document.querySelector("#results").value = current.substring(1, current.length);
  } else { // if the first index is positive (i.e. only a number and no sign in front of it), then add a '-' in front of it
    document.querySelector("#results").value = '-' + current;
  }*/
  }

  function division() {
    document.querySelector("#results").value += "/";
  }

  function equals() {
    document.querySelector("#results").value = eval(document.querySelector("#results").value);
  }

  function deleteLast() {
    let current = document.querySelector("#results").value;
    document.querySelector("#results").value = current.slice(0, -1);
  }
});
