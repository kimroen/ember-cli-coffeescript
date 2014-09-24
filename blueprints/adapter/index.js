module.exports = {
  description: 'Generates an ember-data adapter.',

  availableOptions: [
    { name: 'base-class', type: String, default: 'application' }
  ],
  locals: function(options) {

    var locals = this.lookupBlueprint('adapter').locals(options);
    locals.importStatement = locals.importStatement.replace(/;$/, '');
    return locals;
  }
};
