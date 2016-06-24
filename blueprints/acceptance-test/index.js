var ancestralBlueprint = require('../../lib/utilities/ancestral-blueprint');

module.exports = {
  description: 'Generates an acceptance test for a feature.',
  locals: function() {
    var blueprint = ancestralBlueprint('acceptance-test', this.project);
    blueprint.project = this.project;
    return blueprint.locals.apply(blueprint, arguments);
  }
};
