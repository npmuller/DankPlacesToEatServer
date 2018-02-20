// Base Route
var express = require('express');
var router = express.Router();

// Models
// e.g. var deviceRoutes = require('./devices.js');
var restaurantRoutes = require('./restaurants.js');

// Log every incoming request
router.use(function(req, res, next) {
  console.log('method: %s, url: %s, path: %s', req.method, req.url, req.path);
  next();
});

/********************************************************
 * 
 * Route Definitions
 * 
 *******************************************************/
// Restaurant operations
router.use('/restaurants', restaurantRoutes);

// User settings
// e.g. router.use('/devices', deviceRoutes);

module.exports = router;
