'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;
var expectCoffee = require('../helpers/expect-coffee');

describe('Acceptance: ember generate and destroy transform', function() {
  setupTestHooks(this);

  it('transform foo', function() {
    var args = ['transform', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        var transformFile = file('app/transforms/foo.coffee');

        expect(transformFile)
          .to.contain("import DS from 'ember-data'")
          .to.contain('FooTransform = DS.Transform.extend')
          .to.contain("export default FooTransform");

        expectCoffee(transformFile);

        var transformTestFile = file('tests/unit/transforms/foo-test.coffee');

        expect(transformTestFile)
          .to.contain("import { moduleFor, test } from 'ember-qunit'")
          .to.contain("moduleFor 'transform:foo', 'Unit | Transform | foo', {");

        expectCoffee(transformTestFile);
    }));
  });

  it('transform-test foo', function() {
    var args = ['transform-test', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        var testFile = file('tests/unit/transforms/foo-test.coffee');

        expect(testFile)
          .to.contain("import { moduleFor, test } from 'ember-qunit'")
          .to.contain("moduleFor 'transform:foo', 'Unit | Transform | foo', {");

        expectCoffee(testFile);
    }));
  });
});
