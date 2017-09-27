var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/contactlist';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  db.close();
});


/*var bodyParser = require('body-parser');*/
//var mongojs = require('mongojs');
//var url = 'mongod://localhost:27017/contactlist';
//var db = mongojs('contactlist',['contactlist']);
  //, assert = require('assert');
// Connection URL
//assert.equal(null, err);
 /****persion1 = {
            name:'guddu',
            email:'gudduraj2393@gmail.com',
            number:'8973633363'
            };
     persion2 = {
           name:"ohm",
           email:"ohm2393@gmail.com",
           number:"6786876786"
           };
     persion3 = {
                name:'pankaj',
                email:'pankaj12@gmail.com',
                number:'8393993933'
                };

var contactlist = [persion1,persion2,persion3];
     res.json(item);***/

//MongoClient.close();


//var databaseUrl = 'mongod://localhost:27017/contactlist'; // "username:password@example.com/mydb"
//var collections = ['contactlist'];
//var db1 = require("mongodb").MongoClient;
//     db1.connect(databaseUrl,function(){
//        console.log("success Fully");
//     });
//var index = require('./routes/index');
//var tasks = require('./routes/tasks');


/***
//view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//set static folder
app.use(express.static(path.join(__dirname,'client')));

//body parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/',index);
app.use('/api',tasks);

app.listen(port,function(){
console.log('Server started on port '+port);
});***/


//connecting to the database//
/**var db = require('mongodb').MongoClient.connect(url,function(err,db){
       console.log("database connected");
       db.collection("contactlist");
});
***/


// Use connect method to connect to the Server
/***db.connect(url, function(err, db) {
  var data = db.collection("contactlist").find({}).toArray(function(err,item){
      console.log(item);
      app.use(express.static(path.join(__dirname,'public')));
app.get('/contactlist',function(req,res){
     console.log("receive a request");
     res.json(item);
});
app.listen(port, function(){
console.log("server is running at the port",port);
});
  });
   console.log("Connected correctly to server");

});***/
