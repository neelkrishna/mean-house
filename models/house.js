/**
 * Created by neelkrishna on 8/15/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    address: {type: String, required: true},
    bedrooms: {type: Schema.Types.ObjectId, ref: 'Bedroom'},
    sqFt: {type: int, required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('House', schema);