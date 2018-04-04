var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
  res.render("landing");
});

var courses = [
  {name: "Arrowhead Golf Club", image: "http://www.eighteenunderpar.com/wp-content/uploads/2014/09/arrowhead-2.jpg", url: "http://www.arrowheadcolorado.com/", location: "Littleton, CO"},
  {name: "Castle Pines Golf Club", image: "http://www.nicklaus.com/design/assets/images/castlepines/gallery/6.jpg", url: "https://www.castlepinesgolfclub.club/", location: "Castle Rock, CO"},
  {name: "Sanctuary Golf Course", image: "http://coloradowomensgolf.org/wp-content/uploads/Sanctuary600-001.jpg", url: "https://sanctuarygolfcourse.com/" , location: "Littleton, CO"},
  {name: "The Pinery Country Club", image: "https://www.thepinerycc.com/sites/www.thepinerycc.com/files/styles/content_blocks/public/_BCM2713-cloud_0.jpg?itok=V55ks61k", url: "https://www.thepinerycc.com/#", location: "Parker, CO"},
  {name: "Cherry Hills Country Club", image: "https://www.chcc.com/documents/10184/18455/course-17.jpg", url: "https://www.chcc.com/", location: "Greenwood Village, CO"},
  {name: "Ballyneal Golf Club", image: "https://www.ballyneal.com/wp-content/uploads/2015/01/new-hole-12-c.jpg", url: "https://www.ballyneal.com/", location: "Holyoke, CO"},
  {name: "Perry Park Country Club", image: "http://www.golfind.com/images/offer_179.jpg", url: "http://www.perryparkcc.com/", location: "Larkspur, CO"},
  {name: "Columbine Country Club", image: "https://www.columbinecc.com/images/dynamic/getImage.gif?ID=100274", url: "https://www.columbinecc.com/", location: "Littleton, CO"},
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
