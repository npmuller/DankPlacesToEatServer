var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var _ = require('lodash');
var models = require('../models/models.js');
var knex = require('../database/database.js').knex;