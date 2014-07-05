'use strict';
var path = require('path');

function CoffeescriptAddon(project) {
  this._project = project;
  this.name     = 'Ember CLI Coffeescript Addon';
}

CoffeescriptAddon.prototype.blueprintsPath = function() {
  return path.join(__dirname, 'blueprints');
};

module.exports = CoffeescriptAddon;
