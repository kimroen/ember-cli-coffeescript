'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;
var expectCoffee = require('../helpers/expect-coffee');

describe('Acceptance: ember generate and destroy test-helper', function() {
  setupTestHooks(this);

  it('test-helper foo', function() {
    var args = ['test-helper', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        var testHelperFile = file('tests/helpers/foo.coffee');

        expect(testHelperFile)
          .to.contain("import Ember from 'ember'")
          .to.contain('foo = (app) ->')
          .to.contain("export default Ember.Test.registerAsyncHelper('foo', foo)");

        expectCoffee(testHelperFile);
    }));
  });
});
