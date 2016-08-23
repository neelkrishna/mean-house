/**
 * Created by neelkrishna on 8/15/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var relationship = require('mongoose-relationship');
var mongooseUniqueValidator = require('mongoose-unique-validator');
var bedroom = require('./bedroom');

var schema = new Schema({
    address: {type: String, required: true},
    sqFt: {type: String, required: true},
    bedroomIds:[{ type: String, ref:'bedroom' }]
});
//var house = mongoose.model('house', schema);
schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('House', schema);