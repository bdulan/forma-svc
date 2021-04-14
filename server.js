var express = require('express');
var cors = require('cors')
var app = express();
var path = require('path');

var PORT = 3000
var pages = ['','score','stats','history','calendar','schedule']

app.use(cors());
app.use("/static", express.static('./static/'));

app.get('*', function (req, res, next) {
    // catch all pages that dont work
    var pageName = req.url.split("/")[1].toString();
    if (!pages.includes(pageName)){
        console.log('Page is not included');
        res.sendFile(path.join(__dirname + '/404.html'));
    } else {
        next();
    }
});

// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/real.html'));
});

app.get('/score', function(req, res) {
    res.sendFile(path.join(__dirname + '/score.html'));
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

app.listen(PORT, function () {
    console.log('CORS-enabled web server listening on port ' + PORT)
})