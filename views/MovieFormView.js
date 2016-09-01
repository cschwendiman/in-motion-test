var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var template = require("../templates/MovieForm.hbs");

module.exports = Backbone.View.extend({
    className: "movie-form modal fade",
    events: {
        'click #save': 'handleSave'
    },
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(template(this.model.toJSON()));
    },
    handleSave: function() {
        // TODO fix actors
        this.$el.modal('hide');
        var form = this.$('form');
        var formValues = form.serializeArray().reduce(function(obj, input) {
            obj[input.name] = input.value;
            return obj;
        }, {});
        this.model.set(formValues);
    }
});