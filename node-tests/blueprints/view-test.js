'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;
var expectCoffee = require('../helpers/expect-coffee');

describe('Acceptance: ember generate and destroy view', function() {
  setupTestHooks(this);

  it('view foo', function() {
    var args = ['view', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        var viewFile = file('app/views/foo.coffee');

        expect(viewFile)
          .to.contain("import Ember from 'ember'")
          .to.contain('FooView = Ember.View.extend()')
          .to.contain("export default FooView");

        expectCoffee(viewFile);

        var viewTestFile = file('tests/unit/views/foo-test.coffee');

        expect(viewTestFile)
          .to.contain("import { moduleFor, test } from 'ember-qunit'")
          .to.contain("moduleFor 'view:foo', 'Unit | View | foo'");

        expectCoffee(viewTestFile);
    }));
  });

  it('view-test foo', function() {
    var args = ['view-test', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        var testFile = file('tests/unit/views/foo-test.coffee');

        expect(testFile)
          .to.contain("import { moduleFor, test } from 'ember-qunit'")
          .to.contain("moduleFor 'view:foo', 'Unit | View | foo'");

        expectCoffee(testFile);
    }));
  });
});
