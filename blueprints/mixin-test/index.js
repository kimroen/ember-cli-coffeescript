module.exports = {
  description: 'Generates a mixin unit test.',

  locals: function() {
    var blueprint = this.lookupBlueprint('mixin-test');
    return blueprint.locals.apply(blueprint, arguments);
  }
};
