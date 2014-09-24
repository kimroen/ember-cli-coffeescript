module.exports = {
  locals: function(options) {

    var locals = this.lookupBlueprint('adapter').locals(options);
    locals.importStatement = locals.importStatement.replace(/;$/, '');
    return locals;
  }
};
