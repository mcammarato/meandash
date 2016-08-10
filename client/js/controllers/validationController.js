myApp.controller('mainController', function($scope) {

  // Function to submit the form after all validation passes
  $scope.submitForm = function(isValid) {

    // Check to make sure form validation passes
    if (isValid) {
      alert('Our form is amazing');
    }
  };
});