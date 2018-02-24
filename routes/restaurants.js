var express = require('express');
var router = express.Router();
var collections = require('../models/collections.js');
var models = require('../models/models.js');

// Get all restaurants
// TODO : build json in expected format
router.route('/').get(function (req, res) {
    console.info('Got request for all restaurants!');
    collections.restaurants.forge()
    .fetch()
    .then(function (collection) {
        res.json({restaurants: collection.toJSON()});
    })
    .catch(function (err) {
        console.error('Error getting restaurants! ' + err.message);
        res.status(500).json({message: err.message});
    });
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