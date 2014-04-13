'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('charleses',
	['charleses.services',
	'charleses.directives',
	'charleses.controllers',
	'mgcrea.ngStrap']);

angular.module('charleses.services', []);
angular.module('charleses.directives', []);
angular.module('charleses.controllers', []);

app.run(function(){
    gapi.hangout.render('createhangout-div', { 'render': 'createhangout' });
});
