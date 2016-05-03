// Requiring Dependencies.
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

// Create an instance of express server.
var app = express();

// Our port will be whatever we are given, or if given nothing it will be 80.
var appPORT = process.env.PORT || 80;

// Trying to get css to work ?!?!?!
// Enabling Express to serve static files. (Allows our JavaScript files to be used)
// app.use('/public', express.static(__dirname + '/public'));
app.use(express.static('app/public'));

// Body-parser middleware!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);


app.listen(appPORT, function() {
    console.log("Listening on port: " + appPORT);
});