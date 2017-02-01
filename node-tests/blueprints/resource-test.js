'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var chai = require('ember-cli-blueprint-test-helpers/chai');
var expect = chai.expect;
var file = chai.file;

describe('Acceptance: ember generate and destroy resource', function() {
  setupTestHooks(this);

  it.skip('resource foo', function() {
    var args = ['resource', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (_file) => {
        expect(_file('app/routes/foo.coffee'))
          .to.contain("`import Ember from 'ember'`")
          .to.contain('FooRoute = Ember.Route.extend()')
          .to.contain("`export default FooRoute`");

        expect(_file('app/templates/foo.hbs'))
          .to.contain('{{outlet}}');

        expect(_file('tests/unit/routes/foo-test.coffee'))
          .to.contain("`import { moduleFor, test } from 'ember-qunit'`")
          .to.contain("moduleFor 'route:foo'");

        expect(_file('app/models/foo.coffee'))
          .to.contain("`import DS from 'ember-data'`")
          .to.contain('Foo = DS.Model.extend {')
          .to.contain("`export default Foo`");

        expect(_file('tests/unit/models/foo-test.coffee'))
          .to.contain("moduleForModel 'foo'");

        expect(file('app/router.coffee'))
          .to.contain("@route 'foo'");
    }))
    .then(() => expect(file('app/router.coffee'))
      .to.not.contain("@route 'foo'"));
  });
});
