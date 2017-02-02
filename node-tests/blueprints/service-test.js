'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy service', function() {
  setupTestHooks(this);

  it('service foo', function() {
    var args = ['service', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        expect(file('app/services/foo.coffee'))
          .to.contain("`import Ember from 'ember'`")
          .to.contain('FooService = Ember.Service.extend()')
          .to.contain("`export default FooService`");

        expect(file('tests/unit/services/foo-test.coffee'))
          .to.contain("`import { moduleFor, test } from 'ember-qunit'`")
          .to.contain("moduleFor 'service:foo', 'Unit | Service | foo', {");
    }));
  });

  it('service-test foo', function() {
    var args = ['service-test', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        expect(file('tests/unit/services/foo-test.coffee'))
          .to.contain("`import { moduleFor, test } from 'ember-qunit'`")
          .to.contain("moduleFor 'service:foo', 'Unit | Service | foo', {");
    }));
  });
});
