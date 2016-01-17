var postgres = require('./db');

postgres(onError, function(db) {
  console.log(db);
});

function onError(err) {
  console.log(err);
}