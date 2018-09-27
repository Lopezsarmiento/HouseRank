(function() {
    angular.module('myApp').controller('viewrankingController', viewrankingController);

    viewrankingController.$inject = ['$scope'];

    function viewrankingController($scope) {
        $scope.name = 'view da rank';

    }

})();