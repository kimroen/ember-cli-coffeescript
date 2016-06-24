var ancestralBlueprint = require('../../lib/utilities/ancestral-blueprint');

module.exports = {
  description: 'Generates an import wrapper',

  fileMapTokens: function() {
    var blueprint = ancestralBlueprint('addon-import', this.project);
    return blueprint.fileMapTokens.apply(blueprint, arguments);
  },

  locals: function() {
    var blueprint = ancestralBlueprint('addon-import', this.project);
    return blueprint.locals.apply(blueprint, arguments);
  }
};
