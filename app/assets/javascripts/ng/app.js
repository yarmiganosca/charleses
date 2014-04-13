'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('charleses',
  [ 'charleses.services'
  , 'charleses.controllers'
  , 'mgcrea.ngStrap'
  , 'ngResource'
  , 'ui.router'
]);

angular.module('charleses.services',
  [ 'charleses.user'
]);

angular.module('charleses.controllers',
  [ 'charleses.navController'
  , 'charleses.interviewsController'
]);

function configureApp ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/advocare');
  $stateProvider
  .state('main', {
    url: '/advocare',
    templateUrl: 'ng/navigation'
  })
  .state('main.interview', {
    url: '/advocare/interviews/:patient',
    templateUrl: function (stateParams) {
      return 'ng/interviews/' + stateParams.patient;
    }
  });
}

app.config(['$stateProvider', '$urlRouterProvider', configureApp]);
