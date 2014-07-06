var coffee = require('broccoli-coffee');

function CoffeePreprocessor(options) {
  this.name = 'ember-cli-coffeescript';
  this.ext = 'js';
  this.options = options || {};
}

CoffeePreprocessor.prototype.toTree = function(tree, inputPath, outputPath) {
  var options = {
    bare: true,
    srcDir: inputPath,
    destDir: outputPath
  };

  return coffee(tree, options);
};

module.exports = CoffeePreprocessor;
