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

    app.post('/api/survey', function(req, res){
        

        console.log(req.body.name)
        console.log(req.body.scores.length)

        // var total;
        // var match = "";

        // for (var i = 0; i < friends.length; i++) {
        //     var sum = 0
        //     for (var j = 0; j < friends[i].scores.length; i++) {
        //         sum += friends[i].scores[j]
        //     }
        //     if (sum > total) {
        //         match = friends[i].name
        //     }
        // }

        console.log(match)

        friends.push(req.body)

    });

}