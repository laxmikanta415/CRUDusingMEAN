var categorymodel  = require('../category/category.model');
var _ = require('lodash');


exports.params = function(req,res,next,id){
    
    categorymodel.findById(id,(err,data)=>{
        console.log('[PARAM] getone');
        req.category = data;
       next();
    });
};

exports.getOne = function(req,res,next){
    console.log('[GETONE] getone');
    res.json(req.category);
};

exports.get = function(req,res,next){
    categorymodel.find((err,data)=>{
        console.log('[GET] get');
        res.json(data);
    });
};

exports.post = function(req,res,next){

    categorymodel.create({name: req.body.name},(err,data)=>{
        console.log('[POST] post');
        res.json(data);
    });
};

exports.patch = function(req,res,next){
    console.log(req.body.name);
    var category = _.merge(req.category,{name: req.body.name});
    console.log(category);
    categorymodel.update(category,(err,rowsaffected,data)=>{
        console.log('[PATCH] patch');
        console.log(rowsaffected);
        res.json(data);
    });
};

exports.delete = function(req,res,next){
   req.category.remove((err,removed)=>{
       console.log(removed);
       res.json(removed);
   })
    
};