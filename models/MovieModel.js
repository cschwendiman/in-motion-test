var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
    defaults: {
        'title': '',
        'year': '',
        'genre': '',
        'actors': [],
        'rating': ''
    }
});