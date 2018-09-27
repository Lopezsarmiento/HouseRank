(function () {
	var app = angular.module('myApp', ['ngRoute']);

	app.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'home/home.html',
				controller: 'homeController',
				controllerAs: 'vm'
			})
			.when('/rankHouse', {
				templateUrl: 'rankHouse/rankHouse.html',
				controller: 'rankhouseController',
				controllerAs: 'vm'
			})
			.when('/viewRank', {
				templateUrl: 'viewRanking/viewRanking.html',
				controller: 'viewrankingController',
				controllerAs: 'vm'
			})
			.when('/links', {
				templateUrl: 'links/links.html'
			})
			.when('/steptwo', {
				templateUrl: 'steptwo/steptwo.html',
				controller: 'steptwoController',
				controllerAs: 'vm'
			})
			.otherwise({
				redirectTo: '/home'
			})


	});

})();