var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://ohm:admin12#$@ds151232.mlab.com:51232/mytasklist_ohm',['tasks']);

router.get('/tasks',function(req, res, next){
   db.tasks.find(function(err,tasks){
     if(err){
     res.send(err);
     }else{
      res.json(tasks);
     }
   })
});

router.get('/task/:id',function(req, res, next){
   db.tasks.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,task){
     if(err){
     res.send(err);
     }else{
      res.json(task);
     }
   })
});
module.exports = router;