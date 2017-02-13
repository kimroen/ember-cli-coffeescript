'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;
var expectCoffee = require('../helpers/expect-coffee');

describe('Acceptance: ember generate and destroy helper', function() {
  setupTestHooks(this);

  it('helper foo-bar', function() {
    var args = ['helper', 'foo-bar'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        var helperFile = file('app/helpers/foo-bar.coffee');

        expect(helperFile)
          .to.contain("import Ember from 'ember'")
          .to.contain('export fooBar = (params) ->')
          .to.contain('export default Ember.Helper.helper fooBar');

        expectCoffee(helperFile);

        var helperTestFile = file('tests/unit/helpers/foo-bar-test.coffee');

        expect(helperTestFile)
          .to.contain("import { fooBar } from 'my-app/helpers/foo-bar'")
          .to.contain("module 'Unit | Helper | foo bar'")
          .to.contain("result = fooBar 42");

        expectCoffee(helperTestFile);
    }));
  });
});
