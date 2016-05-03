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
        

        console.log(req.body.name);
        console.log(req.body.scores.length);

        var match = {};
        
        var differenceToBeat = 100;

        for (var i = 0; i < friends.length; i++) {

            var differenceArray = [];
            var totalDifference = 0;


            for (var j = 0; j < friends[i].scores.length; j++) {

                differenceArray.push( Math.abs( req.body.scores[j] - friends[i].scores[j] ) );

            };

            console.log(differenceArray)

            for (var k = 0; k < differenceArray.length; k++) {
                totalDifference += differenceArray[k];
            }

            console.log(totalDifference)
            

            if (match == {}) {
                match = friends[i];
                differenceToBeat = totalDifference;
            } else if ( totalDifference < differenceToBeat ) {
                match = friends[i];
                differenceToBeat = totalDifference;
            }

            console.log(differenceToBeat)

        }


        console.log('Your match is: ' + match.name)

        // Push the new person into the friends array.
        friends.push(req.body)

        // Return the friends array as JSON.
        // res.json(friends)
        res.json(match)

    });

}