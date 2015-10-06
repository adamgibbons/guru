angular

  .module('guru', [
    'ngRoute',
    'ngResource'
  ])

  .config(
            ['$routeProvider', '$httpProvider',
    function( $routeProvider,   $httpProvider ) {

    $httpProvider.defaults.withCredentials = true;

    $routeProvider.when('/', {
      controller: 'MainController',
      templateUrl: 'views/main.html'
    });

    $routeProvider.otherwise({redirectTo: '/'});
  }])

  .run(['$http', function ($http) {
    $http.defaults.withCredentials = true;
  }])

  .controller('MainController', ['$scope', 'CardsService', function ($scope, CardsService) {
    $scope.viewState = {
      complete: false
    };
    $scope.cardIdx = 0;
    $scope.cards = [];
    CardsService.list().then(function(res) {
      $scope.cards = res;
    });

    $scope.createCard = function() {
      console.log('create card clicked');
    };

    $scope.$watch('cardIdx', function (val) {
      if ($scope.cardIdx >= $scope.cards.length) {
        $scope.viewState.complete = true;
      }
    })

  }])

  .directive('guruCard', ['CardsService', function (CardsService) {
    return {
      replace: true,
      templateUrl: "views/guru-card.html",
      scope: {
        card: '=',
        cardIdx: '='
      },
      link: function($scope, el, attrs) {
        function init() {
          $scope.viewState = {
            obverse: true
          };
        }

        function nextCard() {
          $scope.cardIdx++;
          // $scope.card = cardAtIndex($scope.cardIdx);
          $scope.viewState.obverse = true;
        }

        $scope.flipCard = function() {
          $scope.viewState.obverse = !$scope.viewState.obverse;
        };

        $scope.gradeCard = function(grade) {
          nextCard();
        };

        init();
      }
    };
  }])

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