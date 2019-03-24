var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
        });

    app.post("/api/friends", function(req, res) {
        var totalsArray = [];
        for (i = 0; i < friends.length; i++) {
            
            totalDifference = Math.abs(req.body.scores[0] - friends[i].scores[0]) +
            Math.abs(req.body.scores[1] - friends[i].scores[1]) +
            Math.abs(req.body.scores[2] - friends[i].scores[2]) +
            Math.abs(req.body.scores[3] - friends[i].scores[3]) +
            Math.abs(req.body.scores[4] - friends[i].scores[4]) +
            Math.abs(req.body.scores[5] - friends[i].scores[5]) +
            Math.abs(req.body.scores[6] - friends[i].scores[6]) +
            Math.abs(req.body.scores[7] - friends[i].scores[7]) +
            Math.abs(req.body.scores[8] - friends[i].scores[8]) +
            Math.abs(req.body.scores[9] - friends[i].scores[9])
            
            totalsArray.push(totalDifference);
            
            
        }
        console.log(totalsArray);
        Array.min = function(array){
            return Math.min.apply( Math, array );
        };
        var minimum = Array.min(totalsArray);
        console.log(minimum);
        for (i = 0; i < totalsArray.length; i++) {
            if (totalsArray[i] === minimum) {
                console.log(friends[i]);
                res.json(friends[i]);
            }
        }
        friends.push(req.body);
        });
}