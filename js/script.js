/*
Name: Crystal Michelle Boswell
Date: March 2026
File: script.js
Description: Uses jQuery to change the summary paragraph color and
implements the jQuery Validation plugin for the contact form.
*/

window.onload = function () {

```
// Change summary paragraph color
$("#summary").css("color", "blue");

// Run validation if plugin exists
if ($.fn && $.fn.validate) {

    $("#contactForm").validate({

        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            message: "required"
        },

        messages: {
            name: "Please enter your name.",
            email: "Please enter a valid email address.",
            message: "Please enter a message."
        },

        submitHandler: function(form) {

            document.getElementById("successMessage").innerHTML =
                "Your message has been successfully submitted!";

            form.reset();

            return false;

        }

    });

}
```

};
