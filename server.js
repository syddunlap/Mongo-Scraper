// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

// Scraping tools
const axios = require("axios");
const cheerio = require("cheerio");

// Require all models
// const db = require("./models");

// Initialize express
const app = express();

// Start PORT
const PORT = process.env.PORT || 3000;

// Configure Middleware
app.use(express.urlencoded({ extended: true }));
// Parse request body as JSON
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// require("./routes/routes")(app);

// Connect to the MongoDB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Start the Server
app.listen(PORT, () => {
    console.log("App running on Port " + PORT + ".");
});

module.exports = app;