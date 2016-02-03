angular.module('FlFeederApp.controllers', []).
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
});