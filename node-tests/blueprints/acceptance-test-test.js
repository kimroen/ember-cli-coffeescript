'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy acceptance-test', function() {
  setupTestHooks(this);

  it('acceptance-test foo', function() {
    var args = ['acceptance-test', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        expect(file('tests/acceptance/foo-test.coffee'))
          .to.contain("`import Ember from 'ember'`")
          .to.contain("`import { module, test } from 'qunit'`")
          .to.contain("`import startApp from 'my-app/tests/helpers/start-app'`")
          .to.contain("module 'Acceptance: Foo',")
          .to.contain("test 'visiting /foo', (assert) ->")
          .to.contain("visit '/foo'")
          .to.contain("andThen ->")
          .to.contain("assert.equal currentURL(), '/foo'");
    }));
  });
});
