var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  var data = new Buffer(1024);
  fs.readFile('index.html', function (err, data) {
	
  }); 
  response.send(data.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
