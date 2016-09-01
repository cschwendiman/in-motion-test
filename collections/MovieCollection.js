var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var MovieModel = require('../models/MovieModel');

module.exports = Backbone.Collection.extend({
    model: MovieModel
});