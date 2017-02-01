'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy component', function() {
  setupTestHooks(this);

  it('component x-foo', function() {
    var args = ['component', 'x-foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        expect(file('app/components/x-foo.coffee'))
          .to.contain("`import Ember from 'ember'`")
          .to.contain('XFooComponent = Ember.Component.extend()')
          .to.contain('`export default XFooComponent`')
          .to.not.contain('layout');

        expect(file('app/templates/components/x-foo.hbs'))
          .to.contain('{{yield}}');

        expect(file('tests/integration/components/x-foo-test.coffee'))
          .to.contain("`import { test, moduleForComponent } from 'ember-qunit'`")
          .to.contain("`import hbs from 'htmlbars-inline-precompile'`")
          .to.contain("moduleForComponent 'x-foo', 'Integration | Component | x foo'")
          .to.contain('integration: true')
          .to.contain('{{x-foo}}')
          .to.contain('{{#x-foo}}');
    }));
  });
});
