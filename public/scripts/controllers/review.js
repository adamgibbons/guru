angular
.module('guru')
.controller('ReviewController', ['$scope', 'CardsService', '$location', function ($scope, CardsService, $location) {
    $scope.cards = [], $scope.currentCardIdx = 0;

    $scope.viewState = {
      front: true,
      back: false
    };

    function toggleViewState() {
      $scope.viewState = {
        front: !$scope.viewState.front,
        back: !$scope.viewState.back
      };
    }

    function bumpCurrentCardIdx() {
      if ($scope.currentCardIdx + 1 === $scope.cards.length) {
        $location.path('/complete');
      } else {
        $scope.currentCardIdx += 1;
      }
    }

    function showNextCard() {
      toggleViewState();
      bumpCurrentCardIdx();
    }

    CardsService.list().then(function(cards) {
      $scope.cards = cards;
    });

    $scope.flipCard = function() {
      toggleViewState();
    };

    $scope.rateDifficulty = function(rating) {
      console.log(rating);
      // do something magical

      showNextCard();
    };
}]);