$(document).ready(function(){

```
// Change summary paragraph text color
$("#summary").css("color","blue");

// jQuery Validation
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

        // Show success message
        $("#successMessage").fadeIn();

        // Clear the form fields
        form.reset();

        return false;

    }

});
```

});


