// JavaScript source code
var http = require('http');
var ret = require('./exportmodule');
var fs = require('fs');
var url = require('url');
var adr ='http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);
var formidable = require('formidable');
http.createServer(function (req, res) {
    fs.readFile('validation.html', function (err, data) {
        fs.appendFile('mynewdata.txt', '<button type="submit">Button</button>', function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write('Hi Node' + ret.mydatetime() + data);
        if (req.url == '/fileupload') {
            var form = new formidable.IncomingForm();
            form.parse(req, function (err, fields, files) {
                res.write('File uploaded');
                res.end();
            });
        } else {
            res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
            res.write('<input type="file" name="filetoupload"><br>');
            res.write('<input type="submit">');
            res.write('</form>');
        }        
        var queryparse = url.parse(req.url, true).query;
        var appendtext = queryparse.year + " " + queryparse.month + " " + queryparse.day;
        return res.end(appendtext);
        //res.end();
    });
    console.log(q.host);
    console.log(q.pathname);
    console.log(q.search);
}).listen(9090);