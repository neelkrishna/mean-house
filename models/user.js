/**
 * Created by neelkrishna on 8/23/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    houses: [{type: Schema.Types.ObjectId, ref: 'house'}],
    bedrooms: [{type: Schema.Types.ObjectId, ref: 'bedroom'}]

});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);