'use strict';

/* Controllers */

function navController ($scope) {
  $scope.tabs = [
    {
      "title": "Home",
      "content": "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica."
    },
    {
      "title": "Profile",
      "content": "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee."
    },
    {
      "title": "About",
      "content": "Etsy abmixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade."
    }
  ];
}

angular.module('charleses.navController', [])
  .controller('navController', ["$scope", navController]);
