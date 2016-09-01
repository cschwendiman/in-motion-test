var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

template = require("../templates/Movie.hbs");

module.exports = Backbone.View.extend({
    className: "col-lg-3 col-md-4 col-sm-6 col-xs-12",
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(template(this.model.toJSON()));
    }
});