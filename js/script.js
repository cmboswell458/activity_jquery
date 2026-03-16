/*
Name: Crystal Michelle Boswell
Date: March 2026
File: script.js
Description: Uses jQuery to change the summary paragraph color and
implements the jQuery Validation plugin for the contact form.
*/

$(function () {


// Change paragraph color
$("#summary").css("color", "blue");

// Apply validation rules
$("#contactForm").validate({

    rules:{
        name:"required",
        email:{
            required:true,
            email:true
        },
        message:"required"
    },

    messages:{
        name:"Please enter your name.",
        email:"Please enter a valid email address.",
        message:"Please enter a message."
    }

});

// Handle form submission manually
$("#contactForm").on("submit", function(e){

    e.preventDefault(); // stop page reload

    if($(this).valid()){

        alert("Your message has been successfully submitted!");

        this.reset();

    }

});


});
