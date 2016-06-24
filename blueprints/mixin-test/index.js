var ancestralBlueprint = require('../../lib/utilities/ancestral-blueprint');

module.exports = {
  description: 'Generates a mixin unit test.',

  locals: function() {
    var blueprint = ancestralBlueprint('mixin-test', this.project);
    return blueprint.locals.apply(blueprint, arguments);
  }
};
