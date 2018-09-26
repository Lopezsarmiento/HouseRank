(function () {
	var app = angular.module('myApp', ['ngRoute']);

	app.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'home/home.html',
				controller: 'homeController'
			})
			.when('/rankHouse', {
				templateUrl: 'rankHouse/rankHouse.html',
				controller: 'rankhouseController'
			})
			.when('/viewRank', {
				templateUrl: 'viewRanking/viewRanking.html',
				controller: 'viewrankingController'
			})
			.when('/links', {
				templateUrl: 'links/links.html'
			})
			.when('/test', {
				templateUrl: 'test/test.html'
			})
			.otherwise({
				redirectTo: '/home'
			})


	});

})();