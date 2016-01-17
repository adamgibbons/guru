var restify = require('restify');
var server = restify.createServer();

server.get('/hello/:name', respond);

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});