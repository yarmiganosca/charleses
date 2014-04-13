'use strict';

function usersController ($scope, $stateParams, $http) {
  $http.get('/users/' + $stateParams.userId + '.json').success(function (data, status, config, headers) {
    $scope.user = data;
  });

  $scope.$watch('user', function (user) {
    $scope.template = user.first_name.toLowerCase();
  })
}

angular.module('charleses.usersController', [])
  .controller('UsersController', usersController);
