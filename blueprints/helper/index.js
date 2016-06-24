var ancestralBlueprint = require('../../lib/utilities/ancestral-blueprint');

module.exports = {
  description: 'Generates a helper function.',

  normalizeEntityName: function() {
    var blueprint = ancestralBlueprint('helper', this.project);
    return blueprint.normalizeEntityName.apply(blueprint, arguments);
  }
};
