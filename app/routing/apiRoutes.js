// Dependencies
// =============================================================
const friends = require("../data/friends");

// Routes: API
// =============================================================
module.exports = function(app) {
    
    // GET: all possible friends.
    app.get("/api/friends", function(req, res) {
        
        let html;
        html += "<html><head></head><body><h1>Friends list: </h1>";
    
        // We then use the retrieved records from the database to populate our HTML file.
        for (let i = 0; i < friends.length; i++) {
            html += "<strong>" + friends[i].name + "</strong>";
            html += "<p><img style='height: 150px; width: auto;' src='" + friends[i].photo + "'></p>";
            html += "<p>Scores: " + friends[i].scores + " </p> <hr>";
        }

        html += "</body></html>";

        // Send the user the HTML file we dynamically created.
        res.send(html);
        res.json(friends);
    
    });
    
    // POST: Incoming survey results with compatibility logic.
    app.post("/api/friends", function(req, res) {
        
        // Test object:
        // const user = {
		// 	name: "Janice Hosenstein",
		// 	photo: "http://1.bp.blogspot.com/-1rz5KxncouM/VSqQNEJYwkI/AAAAAAAABsk/elkIQ3NsMuw/s1600/janice-from-friends-34854473-500-564.jpg",
		// 	scores: [
        //         2,
        //         1,
        //         1,
        //         3,
        //         1,
        //         2,
        //         5,
        //         2,
        //         4,
        //         6
		// 	]
        // };

        // Insert user input object
        const user = req.body;

        // Create a match object which will hold the match properties later on
        const match = {
            name: '',
            photo: '',
            totalDiff: 100000
        };

        // Loop through all existing friends in the data
		for (var i = 0; i < friends.length; i++) {

			// Compute differences for each question
            var currentDiff = 0;
            
			for (var x = 0; x < user.scores.length; x++) {
				currentDiff += Math.abs(friends[i].scores[x] - user.scores[x]);
			}

			// If currentDiff is lower than the totalDiff, populate friend data into match.
			if (currentDiff < match.totalDiff) {

                match.name = friends[i].name;
				match.photo = friends[i].photo;
				match.totalDiff = currentDiff;
			}
		}

        // Confirm match functions work
        console.log(user.name + " is matched with " + match.name);
        console.log(match.totalDiff);  

        // Push the user's information into friends data, and send match object
        friends.push(user);
        res.json(match);
    
    });
    
};