var express = require('express');

var app = express.createServer(express.logger());



app.get('/', function(request, response) {

var fs = require("fs");
var fileName = "index.html";
fs.exists(fileName, function(exists) {
  if (exists) {
    fs.stat(fileName, function(error, stats) {
      fs.open(fileName, "r", function(error, fd) {
        var buffer = new Buffer(stats.size);
        fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
          var data = buffer.toString("utf8", 0, buffer.length);
          response.send(data);
          fs.close(fd);
        });
      });
    });
  }
});


//  data = new Buffer(1024);
//  fs.readFile('index.html',data);
//  response.send(data.toString());
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
);
