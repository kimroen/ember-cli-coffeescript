var ancestralBlueprint = require('../../lib/utilities/ancestral-blueprint');

module.exports = {
  description: 'Generates a helper unit test.',

  locals: function() {
    var blueprint = ancestralBlueprint('helper-test', this.project);
    return blueprint.locals.apply(blueprint, arguments);
  }
};
