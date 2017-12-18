var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
var userSchema = new Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('user',userSchema);