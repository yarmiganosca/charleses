'use strict';

function usersController ($scope, $stateParams, $http) {
  $http.get('/users/' + $stateParams.userId + '.json').success(function (data) {
    $scope.user = data;
    console.log($scope.user);
  });

  $scope.$watch('user', function (user) {
    $scope.user.template = user.first_name.toLowerCase();
  });
}

angular.module('charleses.usersController', [])
  .controller('UsersController', usersController);
