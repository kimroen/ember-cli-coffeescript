'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;
var expectCoffee = require('../helpers/expect-coffee');

describe('Acceptance: ember generate and destroy service', function() {
  setupTestHooks(this);

  it('service foo', function() {
    var args = ['service', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        var serviceFile = file('app/services/foo.coffee');

        expect(serviceFile)
          .to.contain("import Ember from 'ember'")
          .to.contain('export default Ember.Service.extend()');

        expectCoffee(serviceFile);

        var serviceTestFile = file('tests/unit/services/foo-test.coffee');

        expect(serviceTestFile)
          .to.contain("import { moduleFor, test } from 'ember-qunit'")
          .to.contain("moduleFor 'service:foo', 'Unit | Service | foo', {");

        expectCoffee(serviceTestFile);
    }));
  });

  it('service-test foo', function() {
    var args = ['service-test', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        var serviceTestFile = file('tests/unit/services/foo-test.coffee');

        expect(serviceTestFile)
          .to.contain("import { moduleFor, test } from 'ember-qunit'")
          .to.contain("moduleFor 'service:foo', 'Unit | Service | foo', {");

        expectCoffee(serviceTestFile);
    }));
  });
});
