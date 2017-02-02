'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy helper-addon', function() {
  setupTestHooks(this);

  it('helper-addon foo-bar', function() {
    var args = ['helper-addon', 'foo-bar'];

    return emberNew({target: 'addon'})
      .then(() => emberGenerateDestroy(args, (file) => {
        expect(file('app/helpers/foo-bar.coffee'))
          .to.contain("`export { default, fooBar } from 'my-addon/helpers/foo-bar'`");
    }));
  });
});
