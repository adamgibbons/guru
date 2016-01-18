angular.module('guru').factory('Decks', ['$resource', function ( $resource ) {
  return $resource('//localhost:8080/decks/:id', { id: '@id' }, {});
}])