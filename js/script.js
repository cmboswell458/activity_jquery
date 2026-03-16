/*
Name: Crystal Michelle Boswell
Date: March 2026
File: script.js
Description: Uses jQuery to change the summary paragraph color and
implements the jQuery Validation plugin for the contact form.
*/

$(document).ready(function(){

```
// Change paragraph text color
$("#summary").css("color","blue");

// Apply jQuery validation
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

// Custom submit handler
$("#contactForm").on("submit", function(e){

    e.preventDefault();  // stop page reload

    if($(this).valid()){

        $("#successMessage").text("Your message has been successfully submitted!");

        this.reset();

    }

});
```

});
