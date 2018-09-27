(function () {
	angular.module('myApp').controller('steptwoController', steptwoController);

	steptwoController.$inject = [];

	function steptwoController() {

		var vm = this;

		angular.extend(vm, {
			address: '',
			name: 'step two',
		});

	}

})();