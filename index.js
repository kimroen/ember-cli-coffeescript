'use strict';
var path      = require('path');
var chalk     = require('chalk');
var checker   = require('ember-cli-version-checker');
var defaults  = require('lodash').defaults;

var CoffeePreprocessor = require('./lib/coffee-preprocessor');

module.exports = {
  name: 'Ember CLI Coffeescript Addon',

  shouldSetupRegistryInIncluded: function() {
    return !checker.isAbove(this, '0.2.0');
  },

  getConfig: function() {
    var brocfileConfig = {};
    if (!!this.app) {
      if (!!this.app.options.coffeeOptions) {
        console.log(chalk.yellow("Passing in coffeeOptions from Brocfile.js is \n" +
        "deprecated and support will be removed in the next minor release. \n" +
        "Please use config/environment.js instead. See README on GitHub for more details."));
      }
      brocfileConfig = this.app.options.coffeeOptions || {};
    }
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
