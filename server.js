// Requiring Dependencies.
var express = require('express')
var bodyParser = require('body-parser')

// Create an instance of express server.
var app = express();

// Our port will be whatever we are given, or if given nothing it will be 80.
var appPORT = process.env.PORT || 80;

// Body-parser middleware!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));







app.listen(appPORT, function() {
    console.log("Listening on port: " + appPORT);
});