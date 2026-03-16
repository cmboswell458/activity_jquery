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
    },

    submitHandler:function(form){

        $("#successMessage").text("Your message has been successfully submitted!");

        form.reset();

        return false;

    }

});


});
