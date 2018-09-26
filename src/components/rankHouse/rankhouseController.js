(function() {
    angular.module('myApp').controller('rankhouseController', rankhouseController);

    rankhouseController.$inject = ['$scope'];

    function rankhouseController($scope) {
        $scope.name = 'rank da house';
        $scope.address = {
            direccion: '',
            depto: ''
        }

    }

})();