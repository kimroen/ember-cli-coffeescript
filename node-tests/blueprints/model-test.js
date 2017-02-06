'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;
var expectCoffee = require('../helpers/expect-coffee');

describe('Acceptance: ember generate and destroy model', function() {
  setupTestHooks(this);

  it('model foo', function() {
    var args = ['model', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        var modelFile = file('app/models/foo.coffee');

        expect(modelFile)
          .to.contain("import DS from 'ember-data'")
          .to.contain('Foo = DS.Model.extend {')
          .to.contain("export default Foo");

        expectCoffee(modelFile);

        var modelTestFile = file('tests/unit/models/foo-test.coffee');

        expect(modelTestFile)
          .to.contain("import { moduleForModel, test } from 'ember-qunit'")
          .to.contain("moduleForModel 'foo', 'Unit | Model | foo', {")
          .to.contain("needs: []");

        expectCoffee(modelTestFile);
    }));
  });

  it('model-test foo', function() {
    var args = ['model-test', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        var modelTestFile = file('tests/unit/models/foo-test.coffee');

        expect(modelTestFile)
          .to.contain("moduleForModel 'foo'");

        expectCoffee(modelTestFile);
    }));
  });
});
