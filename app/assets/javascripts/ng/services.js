'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('charleses.services', []).
  value('version', '0.1');

angular.module('charleses.user', []);