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



module.exports = Backbone.View.extend({
    el: "body",
    events: {
        'click #add-movie': 'handleAddMovie',
        'keyup #search': 'handleSearch',
        'movie:edit': 'handleEditMovie'
    },
    initialize: function() {
        this.movieCollection = new MovieCollection();
        this.displayed = this.movieCollection.toArray();
        this.render();
    },
    render: function() {
        this.$('.row').empty();
        _.each(this.displayed, function(movie) {
            this.appendMovie(new MovieView({model: movie}));
        }, this);
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
    handleSearch: function(e) {
        var query = $(e.target).val().trim();
        if(query == '') {
            this.displayed = this.movieCollection.toArray();
        }
        else {
            this.displayed = this.movieCollection.search(query);
        }
        this.render();
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