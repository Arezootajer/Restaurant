// Dependencies

/* Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  var newcharacter = req.body;
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});

// Route that gets table data and pushes it to tables page.

// Route when you click to make a reservation, posts to existing table reservations.

// Use jQuery to run AJAX calls to GET and POST data from users to the Express server

// app.get that will retrieve tables has to retrieve the reservations and the waitlist.



// app.post will need to check first if there's a table available.

// If there isn't a table available, it will send an alert, and add reservation to waitlist array.

// If there is a table available, it will add the table to the table array.

// Make sure to listen on port.

// We need a front end JavaScript file, like the embedded script in Star Wars that will link up table information.

// It will show tables booked and the waitlist.

// And it will have a function to clear tables.

// Also need to make sure the form page is an a href that will do the post, similar to star wars.

// Might need to do something from front end to get form stuff to work.*/

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Express
var app = express();
var PORT = 3000;

// Data Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Tables array that includes customerName, phoneNumber, customerEmail, customerID.
var tables = [{
	routeName: 'table1',
	customerName: 'Person 1',
	phoneNumber: "Phone Number",
	customerEmail: "Email",
	customerID: "Unique ID",
}];

// Waitlist array will include the same information.
var waitlist = [{
	routeName: 'waitlisttable1',
	customerName: 'Person 1',
	phoneNumber: "Phone Number",
	customerEmail: "Email",
	customerID: "Unique ID",
}];


// Routes
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/table", function(req, res){
	res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/reserve", function(req, res){
	res.sendFile(path.join(__dirname, "reserve.html"));
});

/* Route to view tables array
app.get("/api/tables", function(req, res){
	res.sendFile(path.join(__dirname, ".html"));
});*/

// Listener
app.listen(PORT, function(){
	console.log("App listening on PORT "+ PORT);
});

// tables - provides JSON
app.get("/api/tables", function(req, res) {
	console.log("this is fafs hit")
  return res.json(tables);
});

// waitlist - provides JSON
app.get("/api/waitlist", function(req, res) {
	console.log("this is getting hit")
  return res.json(waitlist);
});

/* Search for Specific Character (or all characters) - provides JSON
app.get("/api/:waitlisted?", function(req, res) {
  return res.json(waitlisted);
});*/

// Create new table - takes in JSON input
app.post("/api/new", function(req, res) {
  var table = req.body;

  console.log(table);

  if (tables.length > 2) {
  	waitlist.push(table);
  	console.log("This is the waitlist" + waitlist);
  	res.json("This is the new table." + table);
  } else {
  	tables.push(table);
  	res.json("This is the new table." + table);
  }
});

// Create new table - takes in JSON input
app.post("/api/tables", function(req, res) {
	tables = [];
  	res.json("This is new empty table array." + tables);
});

// Create new table - takes in JSON input
app.post("/api/waitlist", function(req, res) {
	waitlist = [];
  	res.json("This is new empty waitlist array." + tables);
});









