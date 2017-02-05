'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;
var expectCoffee = require('../helpers/expect-coffee');

describe('Acceptance: ember generate and destroy controller', function() {
  setupTestHooks(this);

  it('controller foo', function() {
    var args = ['controller', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        var controllerFile = file('app/controllers/foo.coffee');

        expect(controllerFile)
          .to.contain("import Ember from 'ember'")
          .to.contain('FooController = Ember.Controller.extend()')
          .to.contain("export default FooController");

        expectCoffee(controllerFile);

        var controllerTestFile = file('tests/unit/controllers/foo-test.coffee');

        expect(controllerTestFile)
          .to.contain("import { moduleFor, test } from 'ember-qunit'")
          .to.contain("moduleFor 'controller:foo'");

        expectCoffee(controllerTestFile);
    }));
  });
});
