var express = require("express");
var app = express();
var request = require("request");
// app.set("view engine", "ejs");

app.get('/', function(req, res) {
  res.send("hi");
  console.log("welcome to the movie search!");
});

app.get("/results", function(req, res) {
  request("http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb", function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var results = JSON.parse(body);
      res.send(results["Search"][0]["Title"]);
    }
  });
});

app.listen(3000, function() {
  console.log("SERVER HAS STARTED!!!");
});
