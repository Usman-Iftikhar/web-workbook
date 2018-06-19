'use strict';

window.onload = function(){
  // TASK 1
  var list = document.getElementsByTagName('ul'); // set the li under list variable
  let message = "There are "+list[0].children.length+" list items on the page."; // get the number of items in teh list and store it as message variable
  // alert(message);

  ////////////////////////////////

   // TASK 2 //
  let newH2 = document.createElement('h2'); //create h2 element
  let titleH1 = document.getElementsByTagName("h1"); //get h1 element and store it as titleH1 variable
  titleH1[0].appendChild(newH2); //insert h2 after h1
  newH2.innerHTML = "You have " + list[0].children.length + " items in your shopping cart";

  ////////////////////////////////

  // TASK 3 //
  let input = document.getElementById('item-text'); // getting the input text field and setting it as input variable
  input.setAttribute("placeholder", "Item..."); // putting a placeholder in the input text field

  let addItemButton = document.getElementById('add-item'); // getting add-item button and setting it as addItemButton variable
  // addItemButton.innerHTML="Add Items";

  ////////////////////////////////

  // TASK 4 //
  let removeButton = document.createElement('button');
  removeButton.innerHTML = "Remove";



}
