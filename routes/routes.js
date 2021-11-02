var express = require('express');
var app = express.Router();



app.get("/soon",function(req,res){
    res.render(__dirname +"/blankpage")
  });
  
  app.get("/blogs",function(req,res){
    res.render(__dirname +"/blog")
  });
  
  app.get("/about",function(req,res){
    res.render(__dirname +"/about")
  });
  
  app.get("/sampleblog",function(req,res){
    res.render(__dirname +"/blog-single")
  });
  
  app.get("/faq",function(req,res){
    res.render(__dirname +"/faq")
  });
  
  app.get("/reviews",function(req,res){
    res.render(__dirname +"/reviews")
  });
  
  app.get("/latest",function(req,res){
    res.render(__dirname +"/latest")
  });
  
  app.get("/sampleblog-1",function(req, res){
    res.render(__dirname+"/blog1")
  })
  
  app.get("/sampleblog-2",function(req, res){
    res.render(__dirname+"/blog2")
  })
  
  app.get("/sampleblog-3",function(req, res){
    res.render(__dirname+"/blog3")
  })
  
  app.get("/find-tutor",function(req, res){
    res.render(__dirname+"/tutor")
  })
 app.get("/FAQ",function(req, res){
    res.render(__dirname+"/FAQ")
  })
 app.get("/PrivacyPolicy",function(req, res){
    res.render(__dirname+"/PrivacyPolicy")
  })
  app.get("/service",function(req,res){
    res.render(__dirname +"/service")
  });
  app.get("/disclaimer",function(req,res){
    res.render(__dirname +"/disclaimer")
  });

  module.exports = app;
