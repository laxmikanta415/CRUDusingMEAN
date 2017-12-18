var app = require('./server/server');

var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds031865.mlab.com:31865/nodeauthentication',{useMongoClient: true},(err,res) => {

    if(err){
        console.log(err);
    }
    console.log('connected');

})
app.listen(3000,function(){
    console.log('listening on port 3000');
}); 