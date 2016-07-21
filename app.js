'user strict'

var express = require('express'),
    search = require('bing.search'),
    util = require('util');

var mongoUtil = require('./mongoutil.js');

var app = express();

mongoUtil.connect();

search = new search('IiZhUJHp+KJwJDxogi76Uhmlwwa4aD7VWSiz7hYybKw');

app.use(express.static('public'));

app.get('/imagesearch/:url', (req, res)=>{
        var url = req.params.url;
        var number = req.url
        var currentTime = new Date();
        
        var mySearch = mongoUtil.mySearch();
        //et's store the search term in our db
        mySearch.insert({"term": url, "date": currentTime});
        
        //Lets get the number of results the user wants to get.
        if(number>0){number = number;
        } else {number = 5;}
        
        
   search.images(url, {top: number}, function(err, results){
        if (err) throw err;
        var resultsFormatted = [];
        
        for (var i=0; i<results.length; i++){
            resultsFormatted.push({"url": results[i].url, "snippet": results[i].title, "thumbnail": results[i].thumbnail.url, "context": results[i].sourceUrl});
        }
        
        res.send(resultsFormatted);
        console.log(util.inspect({"url": url, "number of searchs": number}, {colors: true, depth: null}));
    });
    
    
});

app.get('/latest/imagesearch', (req, res)=>{
    
    var mySearch = mongoUtil.mySearch();

    mySearch.find().toArray(function(err, docs){
       if (err) throw err;
       
       res.send(docs.reverse());
    });
});
   
app.listen(process.env.PORT || 8080, function(){
    
    console.log("server listening on port provided and linked to https://fcc-basejumps-abel1987.c9users.io" );
});