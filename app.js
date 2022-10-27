//jshint esversion: 6
//import of npm packages
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

//Server setup
const app = express();

//Path of local static files
app.use(express.static("public"));

//Use of bodyparser or express
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }));

//send the file signup html
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html")
})

//Post route created... path home and callback function
app.post("/", function(req, res) {
    let firstName = req.body.fName;
    let lastName = req.body.lName;
    let email= req.body.email;

    console.log(firstName, lastName, email);
})

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});