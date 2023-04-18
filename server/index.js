var Mongod= require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";
Mongod.connect(url,function(err,dbs){
    if(err) throw err;
    var dbo = dbs.db("admin");
    dbo.createCollection("customers",function(err,res){
 
        // eslint-disable-next-line no-sequences
        if(err,res){
            if(err) throw err;
            console.log("collection created");
            dbs.close();
        }

    })
  
})