'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy util', function() {
  setupTestHooks(this);

  it('util foo-bar', function() {
    var args = ['util', 'foo-bar'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        expect(file('app/utils/foo-bar.coffee'))
          .to.contain('fooBar = () ->')
          .to.contain("`export default fooBar`");

        expect(file('tests/unit/utils/foo-bar-test.coffee'))
          // TODO: This import should use absolute imports
          .to.contain("`import fooBar from '../../../utils/foo-bar'`")
          .to.contain("`import { module, test } from 'qunit'`")
          .to.contain("module 'Unit | Utility | foo bar'")
          .to.contain('result = fooBar()');
    }));
  });

  it('util-test foo-bar', function() {
    var args = ['util-test', 'foo-bar'];

    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        expect(file('tests/unit/utils/foo-bar-test.coffee'))
          .to.contain("`import fooBar from '../../../utils/foo-bar'`")
          .to.contain("`import { module, test } from 'qunit'`")
          .to.contain("module 'Unit | Utility | foo bar'")
          .to.contain('result = fooBar()');
    }));
  });
});
