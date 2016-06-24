var ancestralBlueprint = require('../../lib/utilities/ancestral-blueprint');

module.exports = {
  description: 'Generates an ember-data adapter.',

  availableOptions: [
    { name: 'base-class', type: String }
  ],
  locals: function() {
    var blueprint = ancestralBlueprint('adapter', this.project);
    var locals = blueprint.locals.apply(blueprint, arguments);
    locals.importStatement = locals.importStatement.replace(/;$/, '');
    return locals;
  }
};
