'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy mixin', function() {
  setupTestHooks(this);

  it('mixin foo-bar', function() {
    var args = ['mixin', 'foo-bar'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        expect(file('app/mixins/foo-bar.coffee'))
          .to.contain("`import Ember from 'ember'`")
          .to.contain('FooBarMixin = Ember.Mixin.create()')
          .to.contain("`export default FooBarMixin`");

        expect(file('tests/unit/mixins/foo-bar-test.coffee'))
          .to.contain("`import Ember from 'ember'`")
          // TODO: Fix this import - it should be absolute
          .to.contain("`import FooBarMixin from '../../../mixins/foo-bar'`")
          .to.contain("`import { module, test } from 'qunit'`")
          .to.contain("module 'Unit | Mixin | foo bar'")
          .to.contain('FooBarObject = Ember.Object.extend FooBarMixin')
          .to.contain('subject = FooBarObject.create()');
    }));
  });

  it('mixin-test foo-bar', function() {
    var args = ['mixin-test', 'foo-bar'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        expect(file('tests/unit/mixins/foo-bar-test.coffee'))
          .to.contain("`import Ember from 'ember'`")
          .to.contain("`import FooBarMixin from '../../../mixins/foo-bar'`")
          .to.contain("`import { module, test } from 'qunit'`")
          .to.contain("module 'Unit | Mixin | foo bar'")
          .to.contain('FooBarObject = Ember.Object.extend FooBarMixin')
          .to.contain('subject = FooBarObject.create()');
    }));
  });
});
