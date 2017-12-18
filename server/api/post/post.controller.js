var postModel = require('./post.model');
var _ = require('lodash');
exports.params = (req,res,next,id)=>{
    postModel.findById(id,(err,data)=>{
        req.post = data;
        next();
    });
};

exports.get = (req,res,next)=>{
    postModel.find((err,data)=>{
        res.json(data);
    });
};

exports.getOne = (req,res,next,id)=>{
    postModel.findOne({_id:id}).populate('category').exec((err,data)=>{
        res.json(data);
    })
};

exports.post = (req,res,next)=>{
    postModel.create({title: req.body.title,content: req.body.content, category: req.body.category, author: req.body.author},(err,data)=>{
        res.json(data);
    });
};

exports.patch = (req,res,next)=>{
    var post = _.merge(req.post,req.body);
    console.log(post);
    postModel.update(post,(err,data)=>{
        res.json(data);
    })
};

exports.delete = (req,res,next)=>{
    postModel.remove(req.post,(err,data)=>{
        res.json(data);
    })
};