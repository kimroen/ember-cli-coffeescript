var coffeescript = require('coffee-script');
var expect = require('ember-cli-blueprint-test-helpers/chai').expect;

module.exports = function(file) {
  var compileFunc = function() {
    coffeescript.compile(file.content);
  }

  expect(compileFunc).to.not.throw(Error);
}
