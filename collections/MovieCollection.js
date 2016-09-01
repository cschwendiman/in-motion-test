var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var MovieModel = require('../models/MovieModel');

var testMovies = [
    {
        'title': 'Movie A',
        'year': 2000,
        'genre': 'Action',
        'actors': ['Actor 1', 'Actor 2'],
        'rating': 4
    },
    {
        'title': 'Movie B',
        'year': 2010,
        'genre': 'Drama',
        'actors': ['Actor 1', 'Actor 2'],
        'rating': 2
    },
    {
        'title': 'Movie C',
        'year': 2016,
        'genre': 'Fantasy',
        'actors': ['Actor 1', 'Actor 2'],
        'rating': 5
    }
]

module.exports = Backbone.Collection.extend({
    model: MovieModel,
    initialize: function() {
        this.on('change', this.storeCollection);
        this.on('update', this.storeCollection);
        this.on('reset', this.storeCollection);

        var storedCollection = localStorage.getItem('movieCollection');
        if (storedCollection != '[]') {
            this.reset(JSON.parse(storedCollection));
        }
        else {
            this.reset(testMovies);
        }
    },
    storeCollection: function() {
        localStorage.setItem('movieCollection', JSON.stringify(this));
    }
});