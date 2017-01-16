
var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    bodyParser = require('body-parser'),
    path = require('path'),
    db = require('./models'),
    mongoose = require('mongoose'),
    request = require('request'),
    ctrl = require('./controllers');

//TODO: Setup Angular for front end


app.use("/public", express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//TEST ENDPOINT
app.get('/test', ctrl.test);

http.listen(process.env.PORT || 2300, function(){
  console.log("Application listening on port: " + (process.env.PORT || 2300));
});