//jshint esversion:6

const express = require("express");

const ejs = require("ejs");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();


app.set('view engine', 'ejs');


app.use(express.static("public"));

//TODO

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname+"/index.html");
})