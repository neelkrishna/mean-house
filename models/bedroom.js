/**
 * Created by neelkrishna on 8/15/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var relationship = require('mongoose-relationship');
var house = require('./house');

var schema = new Schema({
    bedSize: {type: String, required: true},
    sqFt: {type: String, required: true},
    houseId: { type:String}
});
//var bedroom = mongoose.model('bedroom', schema);
//schema.plugin(relationship, { relationshipPathName:'house' });



module.exports = mongoose.model('Bedroom', schema);