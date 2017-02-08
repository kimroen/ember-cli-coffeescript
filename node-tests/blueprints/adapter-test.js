'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;
var expectCoffee = require('../helpers/expect-coffee');

describe('Acceptance: ember generate and destroy adapter', function() {
  setupTestHooks(this);

  it('adapter foo', function() {
    var args = ['adapter', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        var adapterFile = file('app/adapters/foo.coffee');

        expect(adapterFile)
          .to.contain("import ApplicationAdapter from './application'")
          .to.contain('export default ApplicationAdapter.extend()');

        expectCoffee(adapterFile);

        var adapterTestFile = file('tests/unit/adapters/foo-test.coffee');

        expect(adapterTestFile)
          .to.contain("moduleFor 'adapter:foo'")

        expectCoffee(adapterTestFile);
    }));
  });

  it('adapter-test foo', function() {
    var args = ['adapter-test', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        var adapterTestFile = file('tests/unit/adapters/foo-test.coffee');

        expect(adapterTestFile)
          .to.contain("import { moduleFor, test } from 'ember-qunit'")
          .to.contain("moduleFor 'adapter:foo'")

        expectCoffee(adapterTestFile);
      }));
  });
});
