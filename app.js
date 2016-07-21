'user strict'

var express = require('express'),
    search = require('bing.search'),
    util = require('util');

var app = express();

search = new search('IiZhUJHp+KJwJDxogi76Uhmlwwa4aD7VWSiz7hYybKw');

app.use(express.static('public'));

app.get('/imagesearch/:url', (req, res)=>{
        var url =req.params.url;

   search.images(url, {top: 3}, function(err, results){
        if (err) throw err;
        var resultsFormatted = [];
        
        for (var i=0; i<results.length; i++){
            resultsFormatted.push({"url": results[i].url, "snippet": results[i].title, "thumbnail": results[i].thumbnail.url, "context": results[i].sourceUrl});
        }
        
        res.send(resultsFormatted);
        console.log(util.inspect(url, {colors: true, depth: null}));
    });
    
    
});
   
app.listen(process.env.PORT || 8080, function(){
    
    console.log("server listening on port provided and link https://fcc-basejumps-abel1987.c9users.io" );
});