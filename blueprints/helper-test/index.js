module.exports = {
  description: 'Generates a helper unit test.',

  locals: function() {
    var blueprint = this.lookupBlueprint('helper-test');
    return blueprint.locals.apply(blueprint, arguments);
  }
};
