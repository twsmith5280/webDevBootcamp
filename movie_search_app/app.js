var express = require("express");
var app = express();
var request = require("request");


app.get("/", function(req, res){
  res.send("Welcome to your Movie Search!");
});


app.get("/results", function(req, res){
  res.render();
});


app.listen(3000, function () {
  console.log("SERVER HAS STARTED!!!");
});
