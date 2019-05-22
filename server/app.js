var express = require('express');
var app = express();
var json = require('./data.json');
var morgan = require('morgan');

app.use(morgan('dev'));

app.get('/', function(req, res){
    res.status(200).send('ok');
});

app.get('/data', function(req, res) {
    res.send(json);
})
module.exports = app;
