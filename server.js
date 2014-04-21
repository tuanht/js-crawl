var express = require('express'),
    report = require('./routes/report');
 
var app = express();
 
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 
app.get('/report', report.findAll);
//app.get('/report/:id', report.findById);
app.post('/report', report.addReport);
//app.put('/report/:id', report.updateWine);
//app.delete('/report/:id', report.deleteWine);
 
app.listen(3000);
console.log('Web service listening on port 3000...');

// Use Node.js as mini web server to display web page
// Ref: http://stackoverflow.com/questions/15231864/display-html-page-with-node-js
var connect = require('connect'),
    http = require('http');
connect()
   .use(connect.static('/home/tuanht/git/js-crawl'))
   .use(connect.directory('/home/tuanht/git/js-crawl'))
   .listen(8080);
console.log('Localhost: web server listening on port 8080...');
