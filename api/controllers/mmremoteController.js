'use strict';

var mongoose = require('mongoose'),
    Module = mongoose.model('Modules');

exports.list_all_modules = function(req, res) {
    Module.find({}, function(err, module) {
        if (err) {
            res.send(err);
        }
        res.json(module);
    });
};

exports.create_a_module = function(req, res) {
    var new_module = new Module(req.body);
    new_module.save(function(err, module) {
        if (err) {
            res.send(err);
        }
        res.json(module);
    });
};

exports.read_a_module = function(req, res) {
    Module.findById(req.params.moduleId, function(err, module) {
        if (err) {
            res.send(err);
        }
        res.json(module);
    });
};

exports.update_a_module = function(req, res) {
    Module.findOneAndUpdate({_id: req.params.moduleId}, req.body, {new: true}, function(err, module) {
        if (err) {
            res.send(err);
        }
        res.json(module);
    });
};

exports.delete_a_module = function(req, res) {
    Module.remove({
        _id: req.params.moduleId
    }, function(err, module) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Module successfully deleted' });
    });
};