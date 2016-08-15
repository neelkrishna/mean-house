/**
 * Created by neelkrishna on 8/15/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    bedSize: {type: String, required: true},
    sqFt: {type: int, required: true}
});

module.exports = mongoose.model('Bedroom', schema);