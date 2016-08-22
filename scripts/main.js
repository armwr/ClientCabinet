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
		vm.editList = editList;
		vm.saveEdit = saveEdit;

		vm.editing;
		vm.person;

		function editList(person) {
			vm.editing = true;
			$scope.person = person;
			console.log('Editing mode')
		}

		function saveEdit() {
			vm.editing = false;
			vm.person = {};
			console.log('Edited!')
		}

	}
})()