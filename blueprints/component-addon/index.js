var ancestralBlueprint = require('../../lib/utilities/ancestral-blueprint');

module.exports = {
  description: 'Generates a component. Name must contain a hyphen.',

  fileMapTokens: function() {
    var blueprint = ancestralBlueprint('component-addon', this.project);
    return blueprint.fileMapTokens.apply(blueprint, arguments);
  },

  normalizeEntityName: function() {
    var blueprint = ancestralBlueprint('component-addon', this.project);
    return blueprint.normalizeEntityName.apply(blueprint, arguments);
  },

  locals: function() {
    var blueprint = ancestralBlueprint('component-addon', this.project);
    return blueprint.locals.apply(blueprint, arguments);
  }
};
