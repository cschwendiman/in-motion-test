var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var _ = require('underscore');

var template = require("../templates/Movie.hbs");
var MovieFormView = require('./MovieFormView');

module.exports = Backbone.View.extend({
    className: "col-lg-3 col-md-4 col-sm-6 col-xs-12",
    events: {
        'click .delete': 'handleDelete',
        'click .edit': 'handleEdit'
    },
    initialize: function() {
        this.listenTo(this.model, 'change', _.bind(this.render, this));
        this.render();
    },
    render: function() {
        this.$el.html(template(this.model.toJSON()));
    },
    handleDelete: function() {
        this.model.destroy();
        this.remove();
    },
    handleEdit: function() {
        this.$el.trigger('movie:edit', this.model);
    }
});