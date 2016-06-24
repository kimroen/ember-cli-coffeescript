var ancestralBlueprint = require('../../lib/utilities/ancestral-blueprint');

module.exports = {
  description: 'Generates an ember-data adapter unit test.',

  locals: function() {
    var blueprint = ancestralBlueprint('adapter-test', this.project);
    return blueprint.locals.apply(blueprint, arguments);
  }
};
