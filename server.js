var express = require('express');
var cors = require('cors')
var app = express();
var path = require('path');

app.use(cors());
app.use("/static", express.static('./static/'));

// viewed at http://localhost:3001
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3002, function () {
    console.log('CORS-enabled web server listening on port 3002')
  })