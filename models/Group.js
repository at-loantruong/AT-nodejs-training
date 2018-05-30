var mongoose = require('mongoose');
var GroupSchema = new mongoose.Schema({
  group_name: {
    type: String
  },
  note: {
    type: String
  }
});

Group = mongoose.model('Group', GroupSchema);

exports.getAll = function(req, res) {
  Group.find(function (err, groups) {
    res.json(groups);
  });
};

exports.getSingle = function(req, res) {
  Group.findById({_id: req.params.id}, function (err, group) {
    res.json(group);
  });
};

var newGroup = new Group;
exports.saveGroup = function(req, res) {
  newGroup.group_name = req.group_name;
  newGroup.note = req.note;
  newGroup.save()
  .then(data => res.send(data))
  .catch(err => res.send(err));
};

exports.updateGroup = function(req, res) {
  var id = req.params.id;
  Group.findByIdAndUpdate({_id: id}, req.body, function (err, data) {
    if(err) res.json(err);
    res.send(data);
  });
};

exports.deleteGroup = function(req, res) {
  var id = req.params.id;
  Group.findByIdAndRemove({_id: id}, function (err, data) {
      if(err) res.json(err);
      res.send(data);
  });
};
