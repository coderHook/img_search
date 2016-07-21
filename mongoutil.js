'user strict'

var mongo = require('mongodb');
var client = mongo.MongoClient;

var _db;

module.exports = {
    connect(){
        client.connect('mongodb://abel1987-fcc_basejumps-3506899:27017/searchs', (err, db)=>{
            if(err){
                console.log("Error connection to mongo - check mongod connection");
                process.exit(1);
            }
            
            _db = db;
            console.log("Connected to mongo");
        });
    },
    
    searchs(){
        return _db.collection('searchs');
    }
}