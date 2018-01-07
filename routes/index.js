// Base Route
var express = require('express');
var router = express.Router();

// Models
// e.g. var deviceRoutes = require('./devices.js');

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
// Brew Settings
// e.g. router.use('/devices', deviceRoutes);

module.exports = router;
