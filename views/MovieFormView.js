var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var _ = require('underscore');

var template = require("../templates/MovieForm.hbs");

module.exports = Backbone.View.extend({
    className: "movie-form modal fade",
    events: {
        'click #save': 'handleSave',
        'click .add-actor': 'handleAddActor'
    },
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(template(this.model.toJSON()));
    },
    handleSave: function() {
        this.$el.modal('hide');
        var form = this.$('form');
        var formValues = this.model.toJSON();
        formValues.actors = [];
        _.each(form.serializeArray(), function(input) {
            input.value = input.value.trim();
            if (input.name == 'actors') {
                if (input.value != '') {
                    formValues[input.name].push(input.value);
                }
            }
            else {
                formValues[input.name] = input.value;
            }
        });
        this.model.set(formValues);
    },
    handleAddActor: function(e) {
        e.preventDefault();
        var newInput = $('<input type="text" class="actor form-control" name="actors" value=""></input>');
        var actors = $(e.target).parents('.actors');
        actors.append(newInput);
    }
});