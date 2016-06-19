'use strict';

/* Controllers */
  // signin controller
app.controller('LoginFormController', ['$scope', '$http', '$state', 'notify', 'user', function($scope, $http, $state, notify, user) {
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
          notify({
              messageTemplate: '<span>' + response.data.res + '</span>'
          });
          $state.go('app.creepypastas-add');
        }
      }, function(x) {
        $scope.authError = 'Error del servidor';
      });
    };
  }])
;
