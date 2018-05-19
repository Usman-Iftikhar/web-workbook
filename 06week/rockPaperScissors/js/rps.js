"use strict"

// Define variables userChoice & computerChoice
var userChoice = prompt("Choose betweeen: rock, paper or scissors.");
var computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice="rock";
  } else if (computerChoice <= 0.67) {
    computerChoice="paper";
  } else {
    computerChoice="scissors";
  }

// Define the function compare
var compare = function(x1,x2) {
  if(x1===x2) {
    return"Its a tie, try again.";
  }
  else if (x1==="rock") {
    if(x2==="scissors") {
      return "Computer wins, better luck next time pal.";
    }
    else {
      return "You win";
    }
  }
  else if (x1==="paper") {
    if(x2==="scissors") {
      return "You win";
    }
    else {
      return "Computer wins, better luck next time pal.";
    }
  }
  else if (x1==="scissors") {
    if(x2==="rock") {
      return "You win";
    }
    else {
      return "Computer wins, better luck next time pal.";
    }
  }
  }

//run the compare funciton
var results = compare(computerChoice, userChoice);

// Display results
document.write("Your choice: " + userChoice + "<br>");
document.write("Computer's choice: " + computerChoice + "<br>");
document.write("<hr>" + results);
