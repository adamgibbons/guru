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

  .factory('CardsData', ['$resource', function ($resource) {

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
  }])
;