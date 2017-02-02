'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy adapter', function() {
  setupTestHooks(this);

  it('adapter foo', function() {
    var args = ['adapter', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        expect(file('app/adapters/foo.coffee'))
          .to.contain("import ApplicationAdapter from './application'")
          .to.contain("FooAdapter = ApplicationAdapter.extend()")
          .to.contain("export default FooAdapter");

        expect(file('tests/unit/adapters/foo-test.coffee'))
          .to.contain("moduleFor 'adapter:foo'")
    }));
  });

  it('adapter-test foo', function() {
    var args = ['adapter-test', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        expect(file('tests/unit/adapters/foo-test.coffee'))
          .to.contain("import { moduleFor, test } from 'ember-qunit'")
          .to.contain("moduleFor 'adapter:foo'")
      }));
  });
});
