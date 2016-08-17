var ancestralBlueprint = require('../../lib/utilities/ancestral-blueprint');

module.exports = {
  description: 'Generates an initializer unit test.',

  locals: function() {
    var blueprint = ancestralBlueprint('initializer-test', this.project);
    return blueprint.locals.apply(blueprint, arguments);
  }
};
