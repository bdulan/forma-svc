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

app.get('/score', function(req, res) {
    res.sendFile(path.join(__dirname + '/score_page.html'));
});

app.get('/stats', function(req, res) {
    res.sendFile(path.join(__dirname + '/stats.html'));
});

app.get('/history', function(req, res) {
    res.sendFile(path.join(__dirname + '/history.html'));
});

app.get('/calendar', function(req, res) {
    res.sendFile(path.join(__dirname + '/calendar.html'));
});

app.get('/schedule', function(req, res) {
    res.sendFile(path.join(__dirname + '/schedule.html'));
});

app.listen(3002, function () {
    console.log('CORS-enabled web server listening on port 3002')
  })