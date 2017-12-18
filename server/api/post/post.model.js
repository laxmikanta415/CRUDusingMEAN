var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
var postSchema = new Schema({
    title: String,
    content: String,
    category: [{type: Schema.Types.ObjectId, ref:'category'}],
    author: { type: Schema.Types.ObjectId, ref: 'user' }
});

module.exports = mongoose.model('post',postSchema);