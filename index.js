var Factory = require('factory-lady'),
    Adapter = Factory.Adapter;

var SequelizeAdapter = function() {};
SequelizeAdapter.prototype = new Adapter();
SequelizeAdapter.prototype.create = function(Model, props) {
  return Model.build(props);
};
SequelizeAdapter.prototype.save = function(doc, Model, cb) {
  doc.save()
    .success(function() {
      cb();
    })
    .error(function(event) {
      var err = new Error('Failed to save fixture');
      err.event = event;
      cb(err);
    });
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
};
