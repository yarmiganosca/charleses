'use strict';

function usersController ($scope, $stateParams, $http) {
  $http.get('/users/' + $stateParams.userId + '.json').success(function (data) {
    $scope.user = data;
    console.log($scope.user);
  });

  $scope.$watch('user', function (user) {
    if (user) {
      $scope.templates = $scope.templates || {};
      $scope.templates.interview = 'ng/interview_forms/' + user.first_name.toLowerCase();
    }
    console.log($scope.userTemplate);
  });
}

angular.module('charleses.usersController', [])
  .controller('UsersController', usersController);
