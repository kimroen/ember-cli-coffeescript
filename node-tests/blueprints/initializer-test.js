'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;
var expectCoffee = require('../helpers/expect-coffee');

describe('Acceptance: ember generate and destroy initializer', function() {
  setupTestHooks(this);

  it('initializer foo-bar', function() {
    var args = ['initializer', 'foo-bar'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        var initializerFile = file('app/initializers/foo-bar.coffee');

        expect(file('app/initializers/foo-bar.coffee'))
          .to.contain('export initialize = () ->')
          .to.contain('export default {')
          .to.contain("name: 'foo-bar'")
          .to.contain("initialize: initialize");

        expectCoffee(initializerFile);

        var initializerTestFile = file('tests/unit/initializers/foo-bar-test.coffee');

        expect(initializerTestFile)
          .to.contain("import Ember from 'ember'")
          .to.contain("import { initialize } from 'my-app/initializers/foo-bar'")
          .to.contain("import { module, test } from 'qunit'")
          .to.contain("module 'Unit | Initializer | foo bar'");

        expectCoffee(initializerTestFile);
    }));
  });
});
