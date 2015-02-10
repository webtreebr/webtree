/*global require, process*/
var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080;

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    'use strict';
    
    res.render('index.jade');
});

app.listen(port);