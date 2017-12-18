var api = require('express').Router();

api.use('/category',require('./category/category.router'));
api.use('/post',require('./post/post.router'));
api.use('/user',require('./user/user.router'));
module.exports = api;  