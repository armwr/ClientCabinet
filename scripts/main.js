(function() {
	'use strict';

	angular
	.module('app', [])
	.controller('myCtrl', myCtrl);

	function myCtrl($http, clientsFactory, $scope) {

		clientsFactory.getClients().then(function(clients) {
			vm.data = clients.data 
		})

		var vm = this;
	}
})()