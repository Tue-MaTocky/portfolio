//		Factories
/*****************************************************************************/
var myFactory = {}
myFactory.simpleFactory = function () {
	var factory = {};
	var customers = [
		{ name: 'Dave Jones', city: 'Phoenix' },
		{ name: 'Jamie Riley', city: 'Atlanta' },
		{ name: 'Heedy Wahlin', city: 'Chandler' },
		{ name: 'Thomas Winter', city: 'Seattle' }
	];
	factory.getCustomers = function () {
		return customers;
	};
	return factory;
};

myFactory.factory = function () {
	var factory = {};
	var customers = [
		{ name: 'Nathan Taylor', city: 'Austin' },
		{ name: 'Tamara Taylor', city: 'Denvor' },
		{ name: 'Dave Taylor', city: 'Green Bay' },
		{ name: 'Coy Shelly', city: 'Green Bay' }
	];
	factory.getCustomers = function () {
		return customers;
	};
	return factory;
};

//		Controllers
/*****************************************************************************/
var myController = {};
myController.SimpleController = function ($scope, simpleFactory) {
	$scope.customers = [];

	function init() {
		$scope.customers = simpleFactory.getCustomers();
	}

	$scope.addCustomer = function () {
		$scope.customers.push ({
			name: $scope.newCustomer.name,
			city: $scope.newCustomer.city
		});
	};

	init();
};

//		Config
/*****************************************************************************/
var myConfig = {};
myConfig.Home = function ($routeProvider) {
	$routeProvider
		.when ('/', {
			controller: 'myController.SimpleController',
			templateUrl: 'partials/AddCust.html'
		})
		.when ('/view2', {
			controller: 'myController.SimpleController',
			templateUrl: 'partials/View2.html'
		})
		.otherwise({ redirectTo: '/' });
};

//		Module
/*****************************************************************************/
var demoApp = angular.module('demoApp', ['ngRoute'])
.factory(myFactory)
.controller(myController)
.config(myConfig.Home);

