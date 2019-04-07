'use strict';

var mongoose = require('mongoose'),
    Module = mongoose.model('Modules');

// get all modules from /modules
exports.list_all_modules = function(req, res) {
    console.log("listing modules");
    Module.find({}, function(err, module) {
        if (err) {
            res.send(err);
        }
        res.json(module);
    });
};

// post new module to /modules
exports.create_a_module = function(req, res) {
    var new_module = new Module(req.body);
    console.log("posting new item");
    console.log(req.body);
    new_module.save(function(err, module) {
        if (err) {
            res.send(err);
        }
        res.json(module);
    });
};

// read module from /modules/{id}
exports.read_a_module = function(req, res) {
    Module.findById(req.params.moduleId, function(err, module) {
        if (err) {
            res.send(err);
        }
        res.json(module);
    });
};

// update module at /modules/{id}
exports.update_a_module = function(req, res) {
    Module.findOneAndUpdate({_id: req.params.moduleId}, req.body, {new: true, upsert: true}, function(err, module) {
        if (err) {
            res.send(err);
        }
        res.json(module);
    });
};

// delte module at /modules/{id}
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