var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.View.extend({
    className: "movie",
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.append('Movie');
    }
});