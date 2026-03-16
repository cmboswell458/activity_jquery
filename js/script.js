$(function () {

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

            $("#successMessage").fadeIn();

            form.reset();

            return false;
        }

    });

}
```

});
