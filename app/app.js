var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000 );
app.set('appData', dataFile);

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
var server = app.listen(3000, function(){
  console.log('Listening on port 3000');
});


/*
without express....
var http = require('http');
var myServer = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type" : "text/html"});
  response.write('Etchy SDR App');
  response.end();

});

myServer.listen(3000);
console.log('Go to LocalHost 3000 on your browser');*/