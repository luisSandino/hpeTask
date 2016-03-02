angular.module('myAppGame', ['ngStorage','ngRoute', 'myAppGame.controllers'] )


.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	
	.when('/', {
	    templateUrl: 'VIEWS/formPlayers.html',
	    controller: 'GameController'
	})

	.when('/tournament', {
	    templateUrl: 'VIEWS/tournament.html',
	    controller: 'TournamentController'
	})
	
	.when('/records', {
	    templateUrl: 'VIEWS/records.html',
	    controller: 'RecordsController'
	})
	
	.otherwise({
	  	redirectTo: '/'
	});

	
}]);

