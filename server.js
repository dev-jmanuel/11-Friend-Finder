// Dependencies
// =============================================================
const express = require("express");

// Set up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Set up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Link to routing
// =============================================================
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

// Start the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);

});
