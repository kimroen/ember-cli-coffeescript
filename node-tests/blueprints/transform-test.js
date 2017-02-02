'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy transform', function() {
  setupTestHooks(this);

  it('transform foo', function() {
    var args = ['transform', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        expect(file('app/transforms/foo.coffee'))
          .to.contain("import DS from 'ember-data'")
          .to.contain('FooTransform = DS.Transform.extend')
          .to.contain("export default FooTransform");

        expect(file('tests/unit/transforms/foo-test.coffee'))
          .to.contain("import { moduleFor, test } from 'ember-qunit'")
          .to.contain("moduleFor 'transform:foo', 'Unit | Transform | foo', {");
    }));
  });

  it('transform-test foo', function() {
    var args = ['transform-test', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        expect(file('tests/unit/transforms/foo-test.coffee'))
          .to.contain("import { moduleFor, test } from 'ember-qunit'")
          .to.contain("moduleFor 'transform:foo', 'Unit | Transform | foo', {");
    }));
  });
});
