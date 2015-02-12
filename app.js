/*global require, process, console*/
var express = require('express'),
    favicon = require('serve-favicon'),
    app = express(),
    port = process.env.PORT || 8080;

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/favicon.ico'));

app.get('/', function (req, res) {
    'use strict';
    
    res.render('index.jade');
});

app.listen(port);
console.log('Listening on port ' + port);