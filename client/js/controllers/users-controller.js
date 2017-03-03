app.controller('userController', ['$scope', '$resource', function ($scope, $resource) {
  var User = $resource('/api/users/:id');
    
  // Get all users 
    User.query(function (results) {
    $scope.users = results;
    });
    $scope.users = []

  // Create User
  $scope.createUser = function () {
    var user = new User();
    user.name = $scope.userName;
    user.username = $scope.userUname;
    user.password = $scope.userPassword;
    user.$save(function(result) {
      $scope.users.push(result);
      $scope.userName = '';
      $scope.userUname = '';
      $scope.userPassword = '';
    });
  };
}]);