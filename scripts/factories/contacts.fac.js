(function() {
	'use strict'

	angular
	.module('app')
	.factory('clientsFactory', clientsFactory)

	function clientsFactory($http) {

		function getClients() {
			return $http.get('mock/data.json')
		}

		return {
			getClients: getClients
		}
	}

})()