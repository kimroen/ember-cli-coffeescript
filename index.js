'use strict';
var path      = require('path');
var defaults  = require('lodash').defaults;

var CoffeePreprocessor = require('./lib/coffee-preprocessor');

module.exports = {
  name: 'Ember CLI Coffeescript Addon',

  getConfig: function() {
    var coffeeOptions = defaults(this.project.config('development').coffeeOptions || {},
      this.app.options.coffeeOptions || {}, {
        blueprints: true
      });

    return coffeeOptions;
  },

  blueprintsPath: function() {
    if (this.getConfig().blueprints) {
      return path.join(__dirname, 'blueprints');
    }
  },

  included: function(app) {
    this.app = app;

    var plugin = new CoffeePreprocessor(this.getConfig());

    this.app.registry.add('js', plugin);
  }
};
