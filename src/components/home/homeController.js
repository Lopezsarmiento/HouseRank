(function() {
  'use strict';

  const app = angular.module('myApp', []);

  app.controller('homeController', function($scope) {
    $scope.name = 'HouseRank';
  });

})();