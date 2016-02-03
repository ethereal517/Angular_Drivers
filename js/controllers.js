angular.module('FlFeederApp.controllers', []).
controller('driversController', function($scope, ergastAPIService) {
  $scope.nameFilter = null;
	$scope.driversList = [];

  ergastAPIService.getDrivers().success(function(response) {
    $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  });
});