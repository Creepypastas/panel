'use strict';

/* Controllers */
  // signin controller
app.controller('LoginFormController', ['$scope', '$http', '$state', 'user', function($scope, $http, $state, user) {
    $scope.user = user.currentUser;
    $scope.authError = null;
    $scope.login = function() {
      $scope.authError = null;
      // Try to login
      user.login()
      .then(function(response) {
        if ( response.data.res != 'Welcome to the jungle!:') {
          $scope.authError = 'Usuario o contraseña incorrectos.';
        }else{
          $state.go('app.blo-blog-add');
        }
      }, function(x) {
        $scope.authError = 'Error del servidor';
      });
    };
  }])
;
