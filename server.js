// JavaScript source code
var http = require('http');
var ret = require('./exportmodule');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('validation.html', function (err, data) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write('Hi Node' + ret.mydatetime());
        res.end();
    });
}).listen(9090);