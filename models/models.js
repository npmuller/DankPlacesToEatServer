var bookshelf = require('../database/database.js').bookshelf;
var _ = require('lodash');

var Restaurant = bookshelf.Model.extend({
    tableName: 'restaurant',
    hasTimestamps: true
});

module.exports = {
  restaurant: Restaurant
  // ...
};
