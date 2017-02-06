'use strict';

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;
var expectCoffee = require('./helpers/expect-coffee');

describe('Unit: expect-coffee', function() {
  it('throws on invalid coffee-script', function() {
    var testFunc = function() {
      expectCoffee({ content: 'var x = 1;' });
    }

    expect(testFunc).to.throw(Error);
  });

  it('does not throw on valid coffee-script', function() {
    var testFunc = function() {
      expectCoffee({ content: 'x = 1' });
    }

    expect(testFunc).to.not.throw(Error);
  });
});
