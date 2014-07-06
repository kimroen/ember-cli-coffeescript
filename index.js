'use strict';
var path = require('path');
var CoffeePreprocessor = require('./lib/coffee-preprocessor');

function CoffeescriptAddon(project) {
  this._project = project;
  this.name     = 'Ember CLI Coffeescript Addon';
}

CoffeescriptAddon.prototype.blueprintsPath = function() {
  return path.join(__dirname, 'blueprints');
};

CoffeescriptAddon.prototype.included = function(app) {
  this.app = app;

  var plugin = new CoffeePreprocessor(this.app.options.coffeeOptions);

  this.app.registry.add('js', plugin);
};

module.exports = CoffeescriptAddon;
