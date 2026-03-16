/*
Name: Crystal Michelle Boswell
Date: March 2026
File: script.js
Description: Uses jQuery to change the summary paragraph color and
provides form submission feedback.
*/

$(function () {


// Change paragraph color
$("#summary").css("color", "blue");

// Handle form submission
$("#contactForm").on("submit", function(e){

    e.preventDefault();

    alert("Your message has been successfully submitted!");

    this.reset();

});


}); 
