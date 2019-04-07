'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModuleSchema = new Schema({
    _id: {
        type: String,
        required: 'Please enter the name of the module'
    },
    status: {
        type: [{
            type: String,
            enum: ['active', 'hidden']
        }],
        default: 'active'
    }
});

module.exports = mongoose.model('Modules', ModuleSchema);