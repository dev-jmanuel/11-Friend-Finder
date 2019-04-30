// Dependencies
// =============================================================
const path = require("path");

// Routes: HTML
// =============================================================

module.exports = function(app) {
    
    // GET: Home page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    
    });
    
    //GET: Survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

};