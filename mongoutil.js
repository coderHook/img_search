'use strict'

let mongo = require('mongodb');
let client = mongo.MongoClient;
let _db;

module.exports = {
    connect(){
        client.connect('mongodb://test:test@ds023325.mlab.com:23325/mysearch', (err, db)=>{
            
            if(err){
                console.log("Error connection to mongo - check mongod connection");
                process.exit(1);
            }
            _db = db;
            console.log("Connected to mongo");
        });
    },
    mySearch(){
        return _db.collection('mySearch');
    }
}