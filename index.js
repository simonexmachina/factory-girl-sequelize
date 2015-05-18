var Factory = require('factory-girl'),
    Adapter = Factory.Adapter;

var SequelizeAdapter = function () {};
SequelizeAdapter.prototype = new Adapter();

SequelizeAdapter.prototype.build = function(Model, props) {
  return Model.build(props);
};

SequelizeAdapter.prototype.save = function(doc, Model, cb) {
  doc.save().nodeify(cb);
};

SequelizeAdapter.prototype.destroy = function(doc, Model, cb) {
  doc.destroy().nodeify(cb);
};

var adapter = new SequelizeAdapter();

module.exports = function(models) {
  if (models) {
    for (var i = 0; i < models.length; i++) {
      Factory.setAdapter(adapter, models[i]);
    }
  }
  else {
    Factory.setAdapter(adapter);
  }
  return adapter;
};
