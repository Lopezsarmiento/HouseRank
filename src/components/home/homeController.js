(function() {
    angular.module('myApp').controller('homeController', homeController);

    homeController.$inject = ['$scope'];

    function homeController($scope) {
        $scope.name = 'da Home';

    }

})();