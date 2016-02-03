angular.module('FlFeederApp.controllers', []).

/* Drivers Controller */
controller('driversController', function($scope, ergastAPIService) {
  $scope.nameFilter = '';
	$scope.driversList = [];

  $scope.searchFilter = function(driver) {
    var keyword = new RegExp($scope.nameFilter, 'i');
    return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || 
      keyword.test(driver.Driver.familyName);
  };

  ergastAPIService.getDrivers().success(function(response) {
    $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  });
}).

/* Driver Controller */
controller('driverController', function($scope, $routeParams, ergastAPIService) {
  $scope.id = $routeParams.id;
  $scope.races = [];
  $scope.driver = null;

  ergastAPIService.getDriverDetails($scope.id).success(function(response) {
    $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
  });

  ergastAPIService.getDriverRaces($scope.id).success(function(response) {
    $scope.races = response.MRData.RaceTable.Races;
  });
});