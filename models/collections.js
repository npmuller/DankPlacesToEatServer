var bookshelf = require('../database/database.js').bookshelf;
var models = require('./models.js');

// Restaurants
var Restaurants = bookshelf.Collection.extend({
  model: models.restaurant
});

module.exports = {
  restaurants: Restaurants
  //...
};