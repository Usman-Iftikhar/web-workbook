let dieChar = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"];

function roll() {
  document.querySelector("#dice").innerHTML = "";
  for (let i = 0; i < 5; i++) {
    let roll = Math.floor(Math.random() * 6)+1;
    document.querySelector("#dice").innerHTML += `<span class="die" data-roll="${roll}">${dieChar[roll-1]}</span>`;
  }
  report();
}

roll();

//////////////////////////////////////////////////////
// Add code here that uses loops and conditional statements
// to determine if any of the following cases are true:
//
function report() {
  document.querySelector("#report").innerHTML = ""; // clear out the report box

  let diceHtml = document.querySelectorAll(".die"); // this puts all the individual die HTML elements in diceHtml

  let Pair = 0;
  let fullHouse = 0;
  let one = 0;
  let two = 0;
  let three = 0;
  let four = 0;
  let five = 0;
  let six = 0;

  for (let dieVal = 1; dieVal < 7; dieVal++) {
    // we set up a nested loop, first we check for all the 1s, then 2s, etc
    // this cycles through each of the 5 die?
    let howManyMatch = 0;
     // we zero out our counter
    // let smallStraight = 0;
    // let bigStraight = 0;
    for (let i = 0; i < 5; i++) {
      // we create the inner loop that cycles through each of the rolled dice
      if (dieVal === Number(diceHtml[i].getAttribute("data-roll"))) {
        // we check if the rolled die is equal to the one's we're counting
        howManyMatch++; // if so, we add one to the count
      }
    }

    if (howManyMatch === 1) {
      if (dieVal === 1) {one=1}
      else if (dieVal === 2) {two=1}
      else if (dieVal === 3) {three=1}
      else if (dieVal === 4) {four=1}
      else if (dieVal === 5) {five=1}
      else if (dieVal === 6) {six=1}
    }
      if (one === 1 && two === 1 && three === 1 && four === 1 && five === 1) {
        document.querySelector("#report").innerHTML = "It's a small straight.";
    }
      else if (two === 1 && three === 1 && four === 1 && five === 1 && six === 1) {
        document.querySelector("#report").innerHTML = "It's a big straight.";
    }
      else if (howManyMatch === 3) {// we check after the counting is done if it is equal to '3'
        document.querySelector("#report").innerHTML += `There are THREE of ${dieVal}s<br>`; // if yes, we report a pair
        fullHouse++; // also store it as a var to keep track of count
          if (Pair === 1 && fullHouse === 1) { //check two conditions for a full-house
          document.querySelector("#report").innerHTML = 'It\'s a full house';
      }
    }
      else if (howManyMatch === 2) {  // we check after the counting is done if it is equal to '2'
        document.querySelector("#report").innerHTML += `There is a PAIR of ${dieVal}s<br>`; // if yes, we report a pair
        Pair++; // also store it as a var to keep track of count
          if (Pair === 2) {
          document.querySelector("#report").innerHTML += `Its a DOUBLE PAIR!`;
      }
    }
      else if (howManyMatch === 4) {
        // we check after the counting is done if it is equal to '4'
        document.querySelector("#report").innerHTML += `There are FOUR of ${dieVal}s<br>`; // if yes, we report a pair
    }
      else if (howManyMatch === 5) {
        // we check after the counting is done if it is equal to '5'
        document.querySelector("#report").innerHTML += `There is a YACHT of ${dieVal}s<br>`; // if yes, we report a pair
    }
  }
}

  // two of dice have the same points, like 3 6 5 6 1 - called pair: example solved for you. Complete the other cases below:

  // three of dice have the same points, like 2 4 5 4 4 - called three; DONE
  // four of dice have the same points, like 1 4 1 1 1 - called four; DONE
  // all five dice have the same points, like 2 2 2 2 2 - called yacht; DONE
  // two pairs at once, like 3 6 5 3 5 - called two-pairs; DONE
  // pair and three at once, like 1 6 6 1 6 - called full-house; DONE
  // sequence from 1 to 5, like 2 4 3 5 1 - called small-straight;
  // sequence from 2 to 6, like 6 3 4 2 5 - called big-straight.

//
// report the results in the div with the ID 'report'.
// report();
