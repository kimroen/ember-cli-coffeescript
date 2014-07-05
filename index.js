'use strict';

function CoffeescriptAddon(project) {
  this._project = project;
  this.name     = 'Ember CLI Coffeescript Addon';
}

CoffeescriptAddon.prototype.blueprintsPath = function() {
  return __dirname + '/blueprints';
};


module.exports = CoffeescriptAddon;
