(function () {
	angular.module('myApp').controller('rankhouseController', rankhouseController);

	rankhouseController.$inject = [];

	function rankhouseController() {

		var vm = this;

		angular.extend(vm, {
			address: '',
			name: 'rank da house',
			autocomplete: {},
			initAutocomplete: initAutocomplete()
		});

		function initAutocomplete() {
			// Create the autocomplete object, restricting the search to geographical
			// location types.
			var input = document.getElementById('inputAddress');
			autocomplete = new google.maps.places.Autocomplete((input), {types: ['geocode']});
			// set address search to specific country
			autocomplete.setComponentRestrictions(
				{'country': ['ar']});

		}

	}

})();