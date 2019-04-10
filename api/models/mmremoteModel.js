'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModuleSchema = new Schema({
    _id: {
        type: String,
        required: 'Please enter the name of the module'
    },
    hidden: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Modules', ModuleSchema);