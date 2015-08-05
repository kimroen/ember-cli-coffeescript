module.exports = {
  description: 'Generates a model unit test.',

  locals: function() {
    var blueprint = this.lookupBlueprint('model-test');
    return blueprint.locals.apply(blueprint, arguments);
  }
};
