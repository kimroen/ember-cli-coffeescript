'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;
var expectCoffee = require('../helpers/expect-coffee');

describe('Acceptance: ember generate and destroy component', function() {
  setupTestHooks(this);

  it('component x-foo', function() {
    var args = ['component', 'x-foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        var componentFile = file('app/components/x-foo.coffee');

        expect(componentFile)
          .to.contain("import Ember from 'ember'")
          .to.contain('XFooComponent = Ember.Component.extend()')
          .to.contain('export default XFooComponent')
          .to.not.contain('layout');

        expectCoffee(componentFile);

        expect(file('app/templates/components/x-foo.hbs'))
          .to.contain('{{yield}}');

        var componentTestFile = file('tests/integration/components/x-foo-test.coffee');

        expect(componentTestFile)
          .to.contain("import { test, moduleForComponent } from 'ember-qunit'")
          .to.contain("import hbs from 'htmlbars-inline-precompile'")
          .to.contain("moduleForComponent 'x-foo', 'Integration | Component | x foo'")
          .to.contain('integration: true')
          .to.contain('{{x-foo}}')
          .to.contain('{{#x-foo}}');

        expectCoffee(componentTestFile);
    }));
  });
});
