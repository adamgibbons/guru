var Card = require('./card');

var Stack = function(id) {
  this.init(id);
};

Stack.prototype.init = function(id) {
  this.id = id;
  this.cards = [];
  return this;
};

Stack.prototype.createCard = function(prompt, response) {
  var card = new Card(prompt, response);
  this.cards.push(card);
  return card;
};

module.exports = Stack;