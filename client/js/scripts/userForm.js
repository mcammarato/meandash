$(document).ready(function() {
  $('#form1').validate({
    rules: {
      name: {
        required  : true,
        minlength : 3
      },
      username : {
        required   : true,
        minlength  : 3
      },
      password : {
        required  : true,
        minlength : 3
      }
    },
    messages: {
      name     : "please enter your name",
      username : "Please enter a valid username",
      password : "Please enter a valid password"
    }
  });
});