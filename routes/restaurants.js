var express = require('express');
var router = express.Router();
var database = require('../database/database.js');
// var collections = require('../models/collections.js');
// var models = require('../models/models.js');

// Get all nearby restaurants
router.route('/getByDistance').get(function (req, res) {
    var centerLat = req.body.centerLat;
    var centerLon = req.body.centerLon;
    var radiusMi = req.body.radiusMi;
    console.debug('Got request for all restaurants within' + radiusMi + ' of ' + centerLat + ', ' + centerLon);
    var knex = database.knex;
    knex.raw('call sp_get_restaurants_by_distance('
        + centerLat + ', '
        + centerLon + ', '
        + radiusMi + ');'
    ).then(function(result) {
        res.json(result);
    })
});

// Get a particular restaurant
router.route('/:id').get(function(req, res) {
    var restaurantId = req.params.id;
    console.info('got request for restaurant id ' + restaurantId);
    models.restaurant.forge({id: restaurantId})
    .fetch()
    .then(function (restaurant) {
        if (!restaurant) {
            console.error('Error getting restaurant ' + restaurantId);
            res.status(404).json({error: true, data: {}});
        }
        else {
            res.json(restaurant.toJSON());
        }
    })
    .catch(function (err) {
        console.error('Error getting restaurant ' + restaurantId + ', ' + err.message);
        res.status(500).json({message: err.message});
    });
});