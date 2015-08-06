var stringUtils = require('../../lib/utilities/string');
var EOL = require('os').EOL;

module.exports = {
  description: 'Generates a component integration or unit test.',

  availableOptions: [
    {
      name: 'test-type',
      type: ['integration', 'unit'],
      default: 'integration',
      aliases: [
        { 'i': 'integration' },
        { 'u': 'unit' },
        { 'integration': 'integration' },
        { 'unit': 'unit' }
      ]
    }
  ],

  fileMapTokens: function() {
    var blueprint = this.lookupBlueprint('component-test');
    return blueprint.fileMapTokens.apply(blueprint, arguments);
  },

  locals: function(options) {
    var blueprint = this.lookupBlueprint('component-test');
    var locals = blueprint.locals.apply(blueprint, arguments);

    var dasherizedModuleName = stringUtils.dasherize(options.entity.name);
    var testImports = EOL + "`import hbs from 'htmlbars-inline-precompile'`";
    var testOptions = "integration: true";

    var testContent = "assert.expect 2" + EOL + EOL +
      "  # Set any properties with @set 'myProperty', 'value'" + EOL +
      "  # Handle any actions with @on 'myAction', (val) ->" + EOL + EOL +
      '  @render hbs """{{' + dasherizedModuleName + '}}"""' + EOL + EOL +
      "  assert.equal @$().text().trim(), ''" + EOL + EOL +
      "  # Template block usage:" + EOL +
      '  @render hbs """' + EOL +
      "    {{#" + dasherizedModuleName + "}}" + EOL +
      "      template block text" + EOL +
      "    {{/" + dasherizedModuleName + "}}" + EOL +
      '  """' + EOL + EOL +
      "  assert.equal @$().text().trim(), 'template block text'";

    if (options.testType === 'unit') {
      testImports = "";
      testOptions = "# Specify the other units that are required for this test" + EOL +
        "  # needs: ['component:foo', 'helper:bar']," + EOL + "  unit: true";

      testContent = "assert.expect 1" + EOL + EOL +
        "  # Creates the component instance" + EOL +
        "  component = @subject()" + EOL +
        "  # Renders the component to the page" + EOL +
        "  @render()" + EOL +
        "  assert.equal @$().text().trim(), ''";
    }

    locals.testImports = testImports;
    locals.testOptions = testOptions;
    locals.testContent = testContent;
    return locals;
  }
};
