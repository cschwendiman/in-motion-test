var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.View.extend({
    className: "movie-form",
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.append('Movie Form');
    }
});