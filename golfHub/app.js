var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get("/", function(req, res){
  res.render("landing");
});

app.get('/courses', function (req, res) {
  var courses = [
    {name: "Arrowhead Golf Club", image: "http://www.eighteenunderpar.com/wp-content/uploads/2014/09/arrowhead-2.jpg", url: "http://www.arrowheadcolorado.com/"},
    {name: "Castle Pines Golf Club", image: "http://www.nicklaus.com/design/assets/images/castlepines/gallery/6.jpg", url: "https://www.castlepinesgolfclub.club/"},
    {name: "Sanctuary Golf Course", image: "http://coloradowomensgolf.org/wp-content/uploads/Sanctuary600-001.jpg", url: "https://sanctuarygolfcourse.com/"},
  ];
  res.render("courses", {courses: courses});
});

app.post('/courses', function (req, res) {
  res.send("you hit the post route");
});

app.listen(3000, function() {
  console.log("golfHub server is running!");
});
