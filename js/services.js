angular.module('FlFeederApp.services', []).
factory('ergastAPIService', function($http) {
	var ergastAPI = {};

	ergastAPI.getDrivers = function() {
		return $http({
			method: 'JSONP',
			url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
		});
	}

	return ergastAPI;
})