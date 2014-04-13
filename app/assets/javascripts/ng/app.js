'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('charleses', [
  'charleses.services',
  'charleses.controllers',
  'mgcrea.ngStrap',
  'ui.router'
]);

angular.module('charleses.services', [
  'charleses.user'
]);

angular.module('charleses.controllers', [
  'charleses.usersController'
]);

function configureApp ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('user', {
    url: '/users/:userId',
    templateUrl: 'ng/users/home',
    controller: 'usersController'
  })
  .state('user.interview', {
    url: '/interview',
    templateUrl: 'ng/interviews/show'
  })
  .state('user.info', {
    url: '/info',
    templateUrl: 'ng/users/info'
  })
  .state('library', {
    url: '/resources',
    templateUrl: 'ng/library'
  })
  .state('healthcare', {
    url: '/healthcare',
    templateUrl: 'ng/users/healthcare',
  });

}

app.config(['$stateProvider', '$urlRouterProvider', configureApp]).run(function(){
  gapi.hangout.render('createhangout-div', { 'render': 'createhangout' });
});
