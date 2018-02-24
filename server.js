"use strict";

var lodash = require('lodash');
var express = require('express');
var routes = require('./routes/index.js');

// Get config values
var env = process.env.NODE_ENV || "development";
var config = require('./config/config.json')[env];

// Instantiate express
var app = express();

// Set up routing
app.use('/dank/api', routes);

// Start the server
app.listen(config.port, function() {
  console.log('DPE API listening on port %d', config.port);
});

module.exports = lodash;
