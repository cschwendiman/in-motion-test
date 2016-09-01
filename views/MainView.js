var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
global.jQuery = $;
require('bootstrap');
var _ = require('underscore');

var MovieView = require('./MovieView');
var MovieFormView = require('./MovieFormView');
var MovieCollection = require('../collections/MovieCollection');
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

module.exports = Backbone.View.extend({
    el: "#main-view",
    events: {
        'click #add-movie': 'handleAddMovie',
        'movie:edit': 'handleEditMovie'
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
    handleAddMovie: function() {
        var newMovie = new MovieModel();
        var form = new MovieFormView({model: newMovie});
        var self = this;
        this.listenTo(newMovie, 'change', function() {
            self.movieCollection.push(newMovie);
            self.appendMovie(new MovieView({model: newMovie}));

            // TODO: Cleanup formview
        });
        this.$el.append(form.$el);
        _.defer(function() {
            form.$el.modal();
        }, this);
    },
    handleEditMovie: function(e, model) {
        var form = new MovieFormView({model: model});

        this.$el.append(form.$el);
        _.defer(function() {
            form.$el.modal();
        }, this);
    },
    createForm: function(model) {

    }
});