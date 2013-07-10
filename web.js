var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 
  fs.readFile('index.html', 'utf8', function(err, data) {
  	if (err) throw err;
  	response.send(data);
  });

//  data = new Buffer(1024);
//  fs.readFile('index.html',data);
//  response.send(data.toString());
);

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
);
