(function() {
	'use strict';

	angular
	.module('app', [])
	.controller('myCtrl', myCtrl);


	// myCtrl.$inject = ['clientsFactory']


	function myCtrl($http) {
		var vm = this;



		// vm.data = data;

		$http.get('mock/data.json').then(function(clients) {
			vm.data = clients.data
		})
		// vm.clientsFactory = clientsFactory;
	}
})()