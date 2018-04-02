/* jshint node: true */
'use strict';
var path      = require('path');
var chalk     = require('chalk');
var defaults  = require('lodash.defaults');

var VersionChecker = require('ember-cli-version-checker');

var CoffeePreprocessor = require('./lib/coffee-preprocessor');

module.exports = {
  name: 'Ember CLI Coffeescript Addon',

  shouldSetupRegistryInIncluded: function() {
    var checker = new VersionChecker(this);

    return !checker.for('ember-cli', 'npm').isAbove('0.2.0');
  },

  getConfig: function() {
    var brocfileConfig = {};
    var coffeeOptions = defaults(this.project.config(process.env.EMBER_ENV).coffeeOptions || {},
      brocfileConfig, {
        blueprints: true
      });

    return coffeeOptions;
  },

  blueprintsPath: function() {
    if (this.getConfig().blueprints) {
      return path.join(__dirname, 'blueprints');
    }
  },

  setupPreprocessorRegistry: function(type, registry) {
    var plugin = new CoffeePreprocessor(this.getConfig());

    registry.add('js', plugin);
  },

  included: function(app) {
    this.app = app;

    if (this.shouldSetupRegistryInIncluded()) {
      this.setupPreprocessorRegistry('parent', app.registry);
    }
  }
};
