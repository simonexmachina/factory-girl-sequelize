var adapter = require('..')();
var config = require('config-node')();
var Sequelize = require('sequelize');
var sequelize = new Sequelize(config.database, config.username, config.password, config.options);

require('sqlite3').verbose(false);
var tests = require('factory-girl/lib/adapter-tests');

describe('Bookshelf adapter', function() {
  var Model = sequelize.define('Model', {
    name: Sequelize.STRING
  });
  init();
  tests(adapter, Model, countModels, instanceOf);
  function countModels(cb) {
    Model.count().then(function(result) {
      cb(null, result);
    }, cb);
  }
  function instanceOf(model, Model) {
    return model instanceof Model.Instance;
  }
  function init() {
    before(function() {
      return sequelize.sync()
        .then(function() {
          return Model.destroy({where: {}});
        });
    });
  }
});
