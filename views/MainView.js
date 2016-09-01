var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var MovieView = require('./MovieView');
var MovieCollection = require('../collections/MovieCollection');

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

module.exports = Backbone.View.extend({
    el: "#main-view",
    events: {
        'click #add-movie': 'addMovie'
    },
    initialize: function() {
        this.movieCollection = new MovieCollection(testMovies);
        this.render();
    },
    render: function() {
        var self = this;
        this.movieCollection.each(function(movie) {
            self.appendMovie(new MovieView({model: movie}));
        });
    },
    appendMovie: function(child) {
        this.$('.row').append(child.$el);
    },
    addMovie: function() {
        console.log('add');
    }
});