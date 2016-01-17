var fs = require('fs');
var Sequelize = require('sequelize');

var options = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432
};

function connect(error, success) {
  fs.readFile('./dev.env.json', function (err, config) {
    if (err) { return error(err); }
    else {
      var conf = config.toString();
      var db = new Sequelize(conf.database, conf.user, conf.password, options);

      return success(db);
    }
  });
}


module.exports = connect;