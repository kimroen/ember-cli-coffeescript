module.exports = {
  description: 'Generates a component. Name must contain a hyphen.',

  fileMapTokens: function() {
    var blueprint = this.lookupBlueprint('component-addon');
    return blueprint.fileMapTokens.apply(blueprint, arguments);
  },

  normalizeEntityName: function() {
    var blueprint = this.lookupBlueprint('component-addon');
    return blueprint.normalizeEntityName.apply(blueprint, arguments);
  },

  locals: function() {
    var blueprint = this.lookupBlueprint('component-addon');
    return blueprint.locals.apply(blueprint, arguments);
  }
};
