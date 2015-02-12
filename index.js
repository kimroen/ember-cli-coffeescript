/* jshint node: true */
'use strict';
var path      = require('path');
var chalk     = require('chalk');
var defaults  = require('lodash').defaults;

var CoffeePreprocessor = require('./lib/coffee-preprocessor');

module.exports = {
  name: 'ember-cli-coffeescript',

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

  included: function(app) {
    this.app = app;

    var plugin = new CoffeePreprocessor(this.getConfig());

    this.app.registry.add('js', plugin);
  }
};
