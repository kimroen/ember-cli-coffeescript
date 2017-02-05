'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;
var expectCoffee = require('../helpers/expect-coffee');

describe('Acceptance: ember generate and destroy serializer', function() {
  setupTestHooks(this);

  it('serializer foo', function() {
    var args = ['serializer', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        var serializerFile = file('app/serializers/foo.coffee');

        expect(serializerFile)
          .to.contain("import DS from 'ember-data'")
          .to.contain('FooSerializer = DS.RESTSerializer.extend()')
          .to.contain("export default FooSerializer");

        expectCoffee(serializerFile);

        var serializerTestFile = file('tests/unit/serializers/foo-test.coffee');

        expect(serializerTestFile)
          .to.contain("import { moduleForModel, test } from 'ember-qunit'")
          .to.contain("moduleForModel 'foo', 'Unit | Serializer | foo',")
          .to.contain("needs: ['serializer:foo']");

        expectCoffee(serializerTestFile);
    }));
  });

  it('serializer-test foo', function() {
    var args = ['serializer-test', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        var testFile = file('tests/unit/serializers/foo-test.coffee');

        expect(testFile)
          .to.contain("import { moduleForModel, test } from 'ember-qunit'")
          .to.contain("moduleForModel 'foo', 'Unit | Serializer | foo',")
          .to.contain("needs: ['serializer:foo']");

        expectCoffee(testFile);
    }));
  });
});
