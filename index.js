'use strict';
var path = require('path');
var CoffeePreprocessor = require('./lib/coffee-preprocessor');

module.exports = {
  name: 'Ember CLI Coffeescript Addon',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this.app = app;

    var plugin = new CoffeePreprocessor(this.app.options.coffeeOptions);

    this.app.registry.add('js', plugin);
  }
};
