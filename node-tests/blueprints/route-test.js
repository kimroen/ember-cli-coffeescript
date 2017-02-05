'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var chai = require('ember-cli-blueprint-test-helpers/chai');
var expect = chai.expect;
var file = chai.file;
var expectCoffee = require('../helpers/expect-coffee');

describe('Acceptance: ember generate and destroy route', function() {
  setupTestHooks(this);

  it.skip('route foo', function() {
    var args = ['route', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (_file) => {
        expect(_file('app/routes/foo.coffee'))
          .to.contain("import Ember from 'ember'")
          .to.contain('FooRoute = Ember.Route.extend()')
          .to.contain("export default FooRoute");

        expect(_file('app/templates/foo.hbs'))
          .to.contain('{{outlet}}');

        expect(_file('tests/unit/routes/foo-test.coffee'))
          .to.contain("import { moduleFor, test } from 'ember-qunit'")
          .to.contain("moduleFor 'route:foo', 'Unit | Route | foo', {");

        expect(file('app/router.coffee'))
          .to.contain("@route 'foo'");
      })
      .then(() => expect(file('app/router.coffee'))
        .to.not.contain("@route 'foo'")
    ));
  });

  it('route-test foo', function() {
    var args = ['route-test', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (_file) => {
        var testFile = _file('tests/unit/routes/foo-test.coffee');

        expect(testFile)
          .to.contain("import { moduleFor, test } from 'ember-qunit'")
          .to.contain("moduleFor 'route:foo', 'Unit | Route | foo', {");

        expectCoffee(testFile);
    }));
  });
});
