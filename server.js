var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
//var db = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/contactlist';
var port = 8000;
var app = express();
var ObjectId = require('mongodb').ObjectID;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));


var mongodb = require('mongodb').MongoClient.connect(url,function(err,db){
    app.get('/contactlist',function(req,res){
        db.collection("contactlist").find().toArray(function(err,item){
           res.json(item);
        });
    });

    app.post('/contactlist',function(req,res){
         db.collection("contactlist").insert(req.body,function(err,docs){
         res.json(docs);
         });
    });

    app.delete('/contactlist/:id',function(req,res){
       var id = req.params.id;
       console.log("id value is",id);
        db.collection("contactlist").remove({_id : ObjectId(id)},function(err,docs){
           if(err){
           console.log("error value is",err);
           }else{
           console.log("no error ");
           res.json(docs);
           }
          // res.json(docs);
        });
    });

    app.get('/contactlist/:id',function(req,res){
        var id = req.params.id;
        db.collection("contactlist").findOne({_id : ObjectId(id)},function(err,item){
            //console.log("item value is",item);
            res.json(item);
        });
    });

    app.put('/contactlist/:id',function(req,res){
         var id = req.params.id;
         db.collection("contactlist").updateOne({_id:ObjectId(id)}, {$set:{name:req.body.name,email:req.body.email,number:req.body.number}},function(err,docs){
             res.json(docs);
         });
         });
    //});

    app.listen(port,function(){
    console.log("server running at the port",port);
    });
});
