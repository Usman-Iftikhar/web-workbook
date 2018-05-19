"use strick"

// current date
var date = new Date();
var day = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear();
date = month + '/' + day + '/' + year;
document.write(date);
