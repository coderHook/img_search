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

        number = number.match(/\=\d+$/img);
        number = number[0].substr(1);
        
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
    
});
   
app.listen(process.env.PORT || 8080, function(){
    
    console.log("server listening on port provided and linked to https://fcc-basejumps-abel1987.c9users.io" );
});