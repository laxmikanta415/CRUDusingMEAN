var userModel = require('./user.model');
var _ = require('lodash');
exports.params = (req,res,next,id)=>{
    userModel.findById(id,(err,data)=>{
        req.user = data;
        next();
    });
};

exports.get = (req,res,next)=>{
    userModel.find((err,data)=>{
        res.json(data);
    });
};

exports.getOne = (req,res,next)=>{
    res.json(req.post);
};

exports.post = (req,res,next)=>{
    userModel.create({username: req.body.username,password: req.body.password},(err,data)=>{
        res.json(data);
    });
};

exports.patch = (req,res,next)=>{
    var post = _.merge(req.user,req.body);
    console.log(post);
    userModel.update(post,(err,data)=>{
        res.json(data);
    })
};

exports.delete = (req,res,next)=>{
    userModel.remove(req.post,(err,data)=>{
        res.json(data);
    })
};