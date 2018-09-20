(function() {
    'use strict';

    var app = angular.module("myApp", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "home/home.html"
            })
            .when("/rankHouse", {
                templateUrl: "rankHouse/rankHouse.html"
            })
            .when("/viewRank", {
                templateUrl: "viewRanking/viewRanking.html"
            })
            .when("/links", {
                templateUrl: "links/links.html"
            })
            .when("/test", {
                templateUrl: "test/test.html"
            })
    });

})();