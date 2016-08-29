/**
 * Created by neelkrishna on 8/15/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var house = require('./house');

var schema = new Schema({
    bedSize: {type: String, required: true},
    sqFt: {type: String, required: true},
    houseId: { type:String}
});

module.exports = mongoose.model('Bedroom', schema);