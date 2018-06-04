// when the document is done loading, run the script inside

//////increase by 1

let counter1 = 0;
let counter10 = 0;
let counter100 = 0;

$(document).ready(function() {
  $('#counter-1').click(function() {
    counter1++;
    $(this).text(counter1);
  })
});

//////increase by 10

$(document).ready(function() {
  $('#counter-10').click(function() {
    counter10=counter10+10;
    $(this).text(counter10);
  })
});

//////increase by 100

$(document).ready(function() {
  $('#counter-100').click(function() {
    counter100=counter100+100;
    $(this).text(counter100);
  })
});

// Add a box for all

var allBox = document.createElement('div'); // creata a div called allBox
var boxContainer = document.querySelector('.boxes'); // assign boxes to boxContainer
allBox.classList.add('box'); // assign allBox class of box
allBox.id = 'allBox'; // give allBox an id
allBox.innerText = 'All'; // add All text to allBox
// allBox.addClass('box');
//boxContainer.after(allBox); // position allBox after boxContainer


$("#counter-100").after(allBox); // position allBox aftr counter-100


$('#allBox').click(function () { // select id allBox and perform a function when clicked

  $('#counter-1').trigger('click');
  $('#counter-10').trigger('click');
  $('#counter-100').trigger('click');

  // counter1++;
  //   $(this).text(counter1);
  // counter10=counter10+10;
  //   $(this).text(counter10);
  // counter100=counter100+100;
  //   $(this).text(counter100);
})
