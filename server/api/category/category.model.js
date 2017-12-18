var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: { type: String,required: true, unique: true }
});

module.exports = mongoose.model('category',categorySchema);
