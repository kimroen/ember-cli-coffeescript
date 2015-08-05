module.exports = {
  description: 'Generates an initializer unit test.',

  locals: function() {
    var blueprint = this.lookupBlueprint('initializer-test');
    return blueprint.locals.apply(blueprint, arguments);
  }
};
