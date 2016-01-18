var sequelize = require('../db');

module.exports = function (req, res, next) {
  sequelize
    .models.decks.findAll()
    .then(function (decks) {
      res.send(200, decks);
      next();
    })
    .catch(function(e) {
      res.send(e);
      next();
    });
};