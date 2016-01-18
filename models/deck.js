var Sequelize = require('sequelize');

module.exports = function(sequelize, options) {
  return sequelize.define('decks', {
    name: Sequelize.STRING,
  }, {
    timestamps: true,
    paranoid: false,
    underscored: true
  });
};

