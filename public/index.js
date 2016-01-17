angular

  .module('guru', [
    'ngRoute',
    'ngResource'
  ])

  .config(  ['$routeProvider', '$httpProvider',
    function( $routeProvider,   $httpProvider ) {

    $httpProvider.defaults.withCredentials = true;

    $routeProvider.when('/', {
      controller: 'HomeController',
      templateUrl: './views/home.html'
    });

    $routeProvider.when('/review', {
      controller: 'ReviewController',
      templateUrl: './views/review.html'
    });

    $routeProvider.when('/complete', {
      controller: 'CompletionController',
      templateUrl: './views/complete.html'
    });

    $routeProvider.otherwise({redirectTo: '/'});
  }])

  .run(['$http', function ($http) {
    $http.defaults.withCredentials = true;
  }])

  .controller('HomeController', ['$scope', '$location', function ($scope, $location) {
    $scope.viewState = {

    };

    $scope.review = function() {
      $location.path('/review');
    };

    $scope.manageCards = function() {};

  }])

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

  }])

  .controller('CompletionController', [function() {

  }])

  // .directive('guruCard', ['CardsService', function (CardsService) {
  //   return {
  //     replace: true,
  //     templateUrl: "views/guru-card.html",
  //     scope: {
  //       card: '=',
  //       cardIdx: '='
  //     },
  //     link: function($scope, el, attrs) {
  //       function init() {
  //         $scope.viewState = {
  //           obverse: true
  //         };
  //       }

  //       function nextCard() {
  //         $scope.cardIdx++;
  //         $scope.viewState.obverse = true;
  //       }

  //       $scope.flipCard = function() {
  //         $scope.viewState.obverse = !$scope.viewState.obverse;
  //       };

  //       $scope.gradeCard = function(grade) {
  //         nextCard();
  //       };

  //       init();
  //     }
  //   };
  // }])

  .factory('CardsService', ['$q', 'CardsData', function ($q, CardsData) {
    function list() {
      var data = CardsData;
      var deferred = $q.defer();
      deferred.resolve(data);
      return deferred.promise;
    }

    return {
      list: list
    };
  }])

  .factory('CardsData', function () {
    return [
      {
        id: 1,
        question: 'What\'s the capital of Tunisia?',
        answer: 'Tunis',
        easinessFactor: 3,
        tags: ['geography', 'capitals']
      },
      {
        id: 2,
        question: 'What\'s the Capital of El Salvidor?',
        answer: 'San Salvador',
        easinessFactor: 3,
        tags: ['geography', 'capitals']
      },
      {
        id: 3,
        question: 'What\'s the Capital of Oklahoma?',
        answer: 'Oklahoma City',
        easinessFactor: 3,
        tags: ['geography', 'capitals']
      }
    ];
  })
;