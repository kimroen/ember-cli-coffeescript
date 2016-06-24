var ancestralBlueprint = require('../../lib/utilities/ancestral-blueprint');

module.exports = {
  description: 'Generates a model unit test.',

  locals: function() {
    var blueprint = ancestralBlueprint('model-test', this.project);
    return blueprint.locals.apply(blueprint, arguments);
  }
};
