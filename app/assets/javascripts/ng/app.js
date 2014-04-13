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
  .state('home', {
    url: '/',
    templateUrl: 'ng/users/welcome',
    controller: 'usersController'
  })


  $stateProvider
  .state('user', {
    url: '/users/:useId',
    templateUrl: 'ng/users/home',
    controller: 'usersController'
  })
  .state('user.interview', {
    url: '/interview',
    templateUrl: 'ng/interviews/show'
  })
  .state('user.appointment', {
    url: '/appointment',
    templateUrl: 'ng/appointments/show'
  })
  .state('user.info', {
    url: '/info',
    templateUrl: 'ng/info'
  })
  .state('user.library', {
    url: '/library',
    templateUrl: 'ng/library/show'
  })
  .state('user.medication', {
    url: '/medication',
    templateUrl: 'ng/medication/show'
  })
  .state('user.team', {
    url: '/team',
    templateUrl: 'ng/team/show'
  })

}

app.config(['$stateProvider', '$urlRouterProvider', configureApp]).run(function(){
  gapi.hangout.render('createhangout-div', { 'render': 'createhangout' });
  
});
