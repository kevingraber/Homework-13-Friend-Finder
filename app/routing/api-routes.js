var path = require('path');
var friends = require ('../data/friends.js')

module.exports = function(app){

    // HTML GET Requests
    // Below code handles when users "visit" a page. 
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    // app.get('/api', function(req, res){
    //     res.sendFile(path.join(__dirname + '/../public/home.html'));
    // });

    app.get('/api/survey', function(req, res){
        res.json(friends);
    });

    // If no matching route is found default to home
    app.use(function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

}