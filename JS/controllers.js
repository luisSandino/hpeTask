//Declaracion del modulo 
var myCtrl=angular.module('myAppGame.controllers', [] );

//Controlador de la vista de juegos en parejas solamente
myCtrl.controller('GameController',['$scope', '$localStorage','$document', function($scope, $localStorage, $document) {
		//guardo los datos en localStorage
	$scope.$storage = $localStorage.$default({
      lists: [] 
      
    });

	$scope.lists = $localStorage.lists;
//Agrego los nuevos juegos al Array lists
	$scope.addGame= function() {
		$scope.lists.push($scope.newGame);
		$scope.newGame= {};
	};   




}]);


//Controlador de la vista de Records
myCtrl.controller('RecordsController',['$scope', '$localStorage', function($scope, $localStorage) {

	
	$scope.lists = $localStorage.lists;

	$scope.addGame= function() {
		$scope.lists.push($scope.newGame);
		$scope.newGame={};		
	};
	$scope.eraseGame= function(index) {
		$scope.lists.splice(index, 1);
		
	};
}]);


//Controlador de la vista de Torneo
myCtrl.controller('TournamentController',['$scope', '$localStorage', function($scope, $localStorage) {	

}]);

  