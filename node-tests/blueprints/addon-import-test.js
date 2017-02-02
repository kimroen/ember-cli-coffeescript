'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy addon-import', function() {
  setupTestHooks(this);

  it('addon-import foo', function() {
    var args = ['addon-import', 'foo'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        expect(file('app/addon-imports/foo.coffee'))
          .to.contain("export { default } from 'my-app/addon-imports/foo'");
    }));
  });
});
