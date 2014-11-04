// initialize the app
angular.module('Exercise3.filters',[]);

angular.module('Exercise3', ['ngRoute', 'Exercise3.filters']);

angular.module('Exercise3').config(function($routeProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html'
        })
        .when('/about', {
            templateUrl: 'templates/about.html'
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angular.module('Exercise3').controller('NavbarCtrl', function($scope, $location) {
    'use strict';
    
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});

angular.module('Exercise3.filters').filter('ransomLetter', function(){
	return function(param){
		var s = '';
		if(param && param.length > 0) {
			for(var i = 0; i < param.length; i++){
				if( i % 2 == 0) {
					s += param[i].toUpperCase();
				} else {
					s += param[i].toLowerCase();
				}
			}
			s += '!'
		}
		return s; //param[0].toUpperCase() + param.slice(1);
	}
});