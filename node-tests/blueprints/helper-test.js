'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy helper', function() {
  setupTestHooks(this);

  it('helper foo-bar', function() {
    var args = ['helper', 'foo-bar'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        expect(file('app/helpers/foo-bar.coffee'))
          .to.contain("`import Ember from 'ember'`")
          .to.contain('fooBar = (params) ->')
          .to.contain('FooBarHelper = Ember.Helper.helper fooBar')
          .to.contain("`export { fooBar }`")
          .to.contain("`export default FooBarHelper`");

        expect(file('tests/unit/helpers/foo-bar-test.coffee'))
          .to.contain("`import { fooBar } from 'my-app/helpers/foo-bar'`")
          .to.contain("module 'Unit | Helper | foo bar'")
          .to.contain("result = fooBar 42");
    }));
  });
});
