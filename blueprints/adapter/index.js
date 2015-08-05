module.exports = {
  description: 'Generates an ember-data adapter.',

  availableOptions: [
    { name: 'base-class', type: String }
  ],
  locals: function() {
    var blueprint = this.lookupBlueprint('adapter');
    var locals = blueprint.locals.apply(blueprint, arguments);
    locals.importStatement = locals.importStatement.replace(/;$/, '');
    return locals;
  }
};
