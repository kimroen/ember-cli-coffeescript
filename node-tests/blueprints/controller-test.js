'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy controller', function() {
  setupTestHooks(this);

  it('controller foo', function() {
    var args = ['controller', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        expect(file('app/controllers/foo.coffee'))
          .to.contain("import Ember from 'ember'")
          .to.contain('FooController = Ember.Controller.extend()')
          .to.contain("export default FooController");

        expect(file('tests/unit/controllers/foo-test.coffee'))
          .to.contain("import { moduleFor, test } from 'ember-qunit'")
          .to.contain("moduleFor 'controller:foo'");
    }));
  });
});
