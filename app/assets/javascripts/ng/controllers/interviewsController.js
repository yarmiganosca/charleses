'use strict';

function interviewsController ($scope, $stateParams) {
  $http.get('/users/' + $stateParams.userId + '.json').success(function (data) {
    $scope.user = data.user;
  });
};

angular.module('charleses.controllers')
  .controller('interviewsController', ['$scope', '$stateParams', interviewsController]);