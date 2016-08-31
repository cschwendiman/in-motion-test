var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var MovieView = require('./MovieView');

module.exports = Backbone.View.extend({
    el: "#main-view",
    initialize: function() {
        this.render();
    },
    render: function() {
        this.appendChild(new MovieView());
        this.appendChild(new MovieView());
        this.appendChild(new MovieView());
    },
    appendChild: function(child) {
        this.$el.append(child.$el);
    }
});