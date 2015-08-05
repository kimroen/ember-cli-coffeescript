module.exports = {
  description: 'Generates an acceptance test for a feature.',
  locals: function() {
    var blueprint = this.lookupBlueprint('acceptance-test');
    return blueprint.locals.apply(blueprint, arguments);
  }
};
