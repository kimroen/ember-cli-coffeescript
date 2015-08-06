module.exports = {
  description: 'Generates a helper function.',

  normalizeEntityName: function() {
    var blueprint = this.lookupBlueprint('helper');
    return blueprint.normalizeEntityName.apply(blueprint, arguments);
  }
};
