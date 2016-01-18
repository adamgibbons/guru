var restify = require('restify');
var server = restify.createServer();
var listDecks = require('./services/list-decks');

server.use(restify.CORS({
  credentials: true
}));

server.get('/decks', listDecks);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});