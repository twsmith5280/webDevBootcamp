// var bottlesOfBeer;
// var beerElement;
var beer = prompt("how many beers are you drinking??")

for (var i = beer; i > 0; i--) {
  // console.log(i);
  // create html element h1 with # of bottles of beer
  // var beerElement = document.createElement("h1");
  // var bottlesOfBeer = document.createTextNode(i + " bottles of beer!");
  // console.log(beerElement);
  // // append to html file
  // var bottlesOfBeer = beerElement.appendChild(bottlesOfBeer);
  var x = document.createElement("h1");                        // Create a <p> node
  var t = document.createTextNode(i + " bottles of beer!");    // Create a text node
  x.appendChild(t);                                           // Append the text to <p>
  document.getElementById("tyler").appendChild(x);                               // Append <p> to <body>

}
