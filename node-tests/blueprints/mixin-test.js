'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;
var expectCoffee = require('../helpers/expect-coffee');

describe('Acceptance: ember generate and destroy mixin', function() {
  setupTestHooks(this);

  it('mixin foo-bar', function() {
    var args = ['mixin', 'foo-bar'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        var mixinFile = file('app/mixins/foo-bar.coffee');

        expect(mixinFile)
          .to.contain("import Ember from 'ember'")
          .to.contain('export default Ember.Mixin.create()');

        expectCoffee(mixinFile);

        var mixinTestFile = file('tests/unit/mixins/foo-bar-test.coffee');

        expect(mixinTestFile)
          .to.contain("import Ember from 'ember'")
          // TODO: Fix this import - it should be absolute
          .to.contain("import FooBarMixin from '../../../mixins/foo-bar'")
          .to.contain("import { module, test } from 'qunit'")
          .to.contain("module 'Unit | Mixin | foo bar'")
          .to.contain('FooBarObject = Ember.Object.extend FooBarMixin')
          .to.contain('subject = FooBarObject.create()');

        expectCoffee(mixinTestFile);
    }));
  });

  it('mixin-test foo-bar', function() {
    var args = ['mixin-test', 'foo-bar'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        var mixinTestFile = file('tests/unit/mixins/foo-bar-test.coffee');

        expect(mixinTestFile)
          .to.contain("import Ember from 'ember'")
          .to.contain("import FooBarMixin from '../../../mixins/foo-bar'")
          .to.contain("import { module, test } from 'qunit'")
          .to.contain("module 'Unit | Mixin | foo bar'")
          .to.contain('FooBarObject = Ember.Object.extend FooBarMixin')
          .to.contain('subject = FooBarObject.create()');

        expectCoffee(mixinTestFile);
    }));
  });
});
