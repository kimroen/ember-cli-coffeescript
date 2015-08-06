module.exports = {
  description: 'Generates an import wrapper',

  fileMapTokens: function() {
    var blueprint = this.lookupBlueprint('addon-import');
    return blueprint.fileMapTokens.apply(blueprint, arguments);
  },

  locals: function() {
    var blueprint = this.lookupBlueprint('addon-import');
    return blueprint.locals.apply(blueprint, arguments);
  }
};
