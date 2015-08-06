module.exports = {
  description: 'Generates an ember-data adapter unit test.',

  locals: function() {
    var blueprint = this.lookupBlueprint('adapter-test');
    return blueprint.locals.apply(blueprint, arguments);
  }
};
