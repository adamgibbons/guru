angular
.module('guru')
.controller('HomeController', ['$scope', '$location', 'Decks', function ($scope, $location, Decks) {
  $scope.viewState = {
  };

  $scope.review = function() {
    $location.path('/review');
  };

  $scope.manageCards = function() {};

  Decks.query(function (decks) {
    console.log('decks', decks);
  });
}]);