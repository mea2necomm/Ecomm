require('dotenv').load();
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var fs = require('fs');
//require passport used for authentication service
var passport = require('passport')
// require the database so initial connection is established
require('./server/models/db');
//require the passport strategy
require('./server/config/passport');

// Get our API routes
const api = require('./server/routes/api');
var paypal = require('./server/controllers/payment');


try {
  var configJSON = fs.readFileSync(__dirname + "/config.json");
  var config = JSON.parse(configJSON.toString());
} catch (e) {
  console.error("File config.json not found or is invalid: " + e.message);
  process.exit(1);
}
paypal.init(config);

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//Set static folder
app.use(express.static(path.join(__dirname,'src')));

//Initialize passport after static pages but before the routes
//that are going to use authentication
app.use(passport.initialize());

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

// error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});


/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
