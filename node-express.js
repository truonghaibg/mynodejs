var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({extended: false});



app.get('/index.html', function(req, res) {
    console.log("get");
    res.sendFile(__dirname + '/' + 'index.html');
});

app.post('/', function(request, response) {
    console.log("post");
    response.send("post");
});

app.delete('/delete', function(request, response) {
    console.log("delete");
    response.send("delete");
});

app.get('/get_list', function(request, response) {
    console.log("get_list");
    response.send("get_list");
});

app.get('/process_get', function (req, res) {
    // Prepare output in JSON format
    response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })


var server = app.listen(8181, 'localhost', function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 });
