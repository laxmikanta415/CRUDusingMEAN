var express = require('express');
var app = express();
var api = require('./api/api');

/* adding all middlewares like body parser,  morgan etc... */

require('./middleware/middleware')(app);

app.use('/api',api);

module.exports = app; 