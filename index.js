var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

$(function() {
    var MainView = require('./views/MainView');
    new MainView();
});
