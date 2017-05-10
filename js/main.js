/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.
$(function(){
  $('div.form-group').prop('required',true);

  $('#order-form').validate({
    submitHandler: function(form) {
      form.submit();
    },

    rules:{
      'your-name':{
        required:true,
        maxlength:128,
      
      },

      'your-zip':{
        maxlength: 5,
        digits:true
      },

      'card-number':{
        required:true,
        creditcard: true
      }
    }


  }); // order-form
}); //document function
