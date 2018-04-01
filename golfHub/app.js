var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
  res.render("landing");
});

var courses = [
  {name: "Arrowhead Golf Club", image: "http://www.eighteenunderpar.com/wp-content/uploads/2014/09/arrowhead-2.jpg", url: "http://www.arrowheadcolorado.com/"},
  {name: "Castle Pines Golf Club", image: "http://www.nicklaus.com/design/assets/images/castlepines/gallery/6.jpg", url: "https://www.castlepinesgolfclub.club/"},
  {name: "Sanctuary Golf Course", image: "http://coloradowomensgolf.org/wp-content/uploads/Sanctuary600-001.jpg", url: "https://sanctuarygolfcourse.com/"},
];

app.get('/courses', function (req, res) {

  res.render("courses", {courses: courses});
});

app.get('/courses/new', function (req, res) {
  res.render("new.ejs");
});

app.post('/courses', function (req, res) {
  // get data from form and add to courses array
  var name = req.body.name;
  var image = req.body.image;
  var url = req.body.url;
  var newCourse = {name: name, image: image, url: url};
  courses.push(newCourse);
  // redirect back to courses page
  res.redirect('/courses');
});

app.listen(3000, function() {
  console.log("golfHub server is running!");
});
