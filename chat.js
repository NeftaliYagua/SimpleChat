var config = require('./config.json');
var express = require('express');
//var serveStatic = require('serve-static');
//var bodyParser = require('body-parser');
//var multer = require('multer');
//var massive = require("massive");
//var massiveInstance = massive.connectSync({connectionString : connectionString});
//var db;

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//app.get('/', function(req, res){
//  res.send('<h1>Hello world</h1>');
//});


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/chat.html');
});
http.listen(config.express.port, function () {
    console.log('listening on *:' + config.express.port);
});
//db = app.get('db');

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});