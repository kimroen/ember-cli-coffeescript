'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;
var expectCoffee = require('../helpers/expect-coffee');

describe('Acceptance: ember generate and destroy initializer-addon', function() {
  setupTestHooks(this);

  it('initializer-addon foo-bar', function() {
    var args = ['initializer-addon', 'foo-bar'];

    return emberNew({ target: 'addon' })
      .then(() => emberGenerateDestroy(args, (file) => {
        var initializerFile = file('app/initializers/foo-bar.js');

        expect(initializerFile)
          .to.contain("export { default, initialize } from 'my-addon/initializers/foo-bar';");
    }));
  });
});
