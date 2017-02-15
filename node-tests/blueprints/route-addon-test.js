'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

var expect = require('ember-cli-blueprint-test-helpers/chai').expect;
var expectCoffee = require('../helpers/expect-coffee');

describe('Acceptance: ember generate and destroy route-addon', function() {
  setupTestHooks(this);

  it('route-addon foo', function() {
    var args = ['route-addon', 'foo'];

    return emberNew({ target: 'addon' })
      .then(() => emberGenerateDestroy(args, (file) => {
        var routeFile = file('app/routes/foo.js');

        expect(routeFile)
          .to.contain("export { default } from 'my-addon/routes/foo';");

        var templateFile = file('app/templates/foo.js');

        expect(templateFile)
          .to.contain("export { default } from 'my-addon/templates/foo';");
    }));
  });
});
