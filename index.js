// TODO error catching for wrong args

// Packages
var express = require("express");
var app = express();

var bodyParser = require("body-parser");

// Mongo

var mongoose = require('mongoose');
mongoose.connect( require('./config.js').mongodb);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Successfully joined");
});

// use 

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

// routes

// User
app.use("/add", require("./routes/add-user-routes")());
app.use("/find", require("./routes/find-user-routes.js")());
app.use("/increasescore", require("./routes/update-user-score-routes")());

// Misc
app.use("/", require("./routes/index-routes.js")());
app.use("*", require("./routes/misc-routes")());

// server
app.listen(8080, function () {
    console.log("Server running");
});