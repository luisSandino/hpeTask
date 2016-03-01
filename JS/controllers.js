//Declaracion del modulo 
var myCtrl=angular.module('myAppGame.controllers', [] );

//Controlador de la vista de juegos en parejas solamente
myCtrl.controller('GameController',['$scope', '$localStorage', function($scope, $localStorage) {
		//guardo los datos en localStorage
	$scope.$storage = $localStorage.$default({
      lists: [] 
      
    });
	
	$scope.lists = $localStorage.lists;
//Agrego los nuevos juegos al Array lists
	$scope.addGame= function() {
		$scope.lists.push($scope.newGame);
		$scope.newGame={};
	};  

//var plyrName1= document.querySelector('playerName1');
var plyrName1= angular.element(document.querySelector('#playerName1'));
var plyrStrtgy1= angular.element(document.querySelector('#playerStrategy1'));
var plyrName2= angular.element(document.querySelector('#playerName2'));
var plyrStrtgy2=  angular.element(document.querySelector('#playerStrategy2'));


$scope.gameRules = function(plyrName1) {
	plyr1= plyrName1;
	if (plyr1==='H') {alert('listo')} else {}
		return plyr1;
}











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

  