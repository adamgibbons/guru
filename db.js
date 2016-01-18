var Sequelize = require('sequelize');
var config = require('./config');

var options = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432
};

var sequelize = new Sequelize(config.database, config.user, config.password, options);

(require('./models/deck')(sequelize, options));

module.exports = sequelize;