//jshint esversion: 6
//import of npm packages
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

//Server setup
const app = express();
app.listen(3000, function() {
    console.log("Server is running on port 3000");
});