/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.
$(function(){
  $('div.form-group').prop('required',true);

    $.validator.addMethod('withSpaces', function(value, element){
      return value.match(/^[a-zA-Z ]+$/);

    }, "Please only use letters and spaces."
  );


  $('#order-form').validate({
    submitHandler: function(form) {
      form.submit();
    },

    rules:{
      'your-name':{
        required:true,
        maxlength :128,
        withSpaces: true
      },

      'your-zip':{
        maxlength: 5,
        digits:true
      },

      'card-holder-name':{
        required:true,
        maxlength:128,
        withSpaces: true
      },

      'card-number':{
        required:true,
        creditcard: true,
        digits: true
      },

      'cvv':{
        required:true,
        digits:true,
        maxlength:3
      },

      'your-state':{
        required:true,
        maxlength:2
      },

      'comments':{
        maxlength:500,
      }


      } //rules
  }); // order-form
}); //document function
