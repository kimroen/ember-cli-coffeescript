'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy serializer', function() {
  setupTestHooks(this);

  it('serializer foo', function() {
    var args = ['serializer', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        expect(file('app/serializers/foo.coffee'))
          .to.contain("`import DS from 'ember-data'`")
          .to.contain('FooSerializer = DS.RESTSerializer.extend()')
          .to.contain("`export default FooSerializer`");

        expect(file('tests/unit/serializers/foo-test.coffee'))
          .to.contain("`import { moduleForModel, test } from 'ember-qunit'`")
          .to.contain("moduleForModel 'foo', 'Unit | Serializer | foo',")
          .to.contain("needs: ['serializer:foo']");
    }));
  });

  it('serializer-test foo', function() {
    var args = ['serializer-test', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        expect(file('tests/unit/serializers/foo-test.coffee'))
          .to.contain("`import { moduleForModel, test } from 'ember-qunit'`")
          .to.contain("moduleForModel 'foo', 'Unit | Serializer | foo',")
          .to.contain("needs: ['serializer:foo']");
    }));
  });
});
