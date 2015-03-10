module.exports = {
  description: 'Generates a component. Name must contain a hyphen.',

  fileMapTokens: function() {
    return this.lookupBlueprint('component').fileMapTokens();
  },

  normalizeEntityName: function(entityName) {
    return this.lookupBlueprint('component').normalizeEntityName(entityName);
  },

  locals: function(options) {
    var locals = this.lookupBlueprint('component').locals(options);

    // This is here to work around this bug in ember-cli:
    // https://github.com/ember-cli/ember-cli/issues/4001
    if (!this.project) {
      return locals;
    }

    var newContents = '';
    if (locals.contents) {
      newContents = locals.contents + '\n';
    }

    var newImport = '';
    if (locals.importTemplate) {
      newImport = "`" + locals.importTemplate.replace(/;/, '`');
    }

    locals.contents = newContents;
    locals.importTemplate = newImport;

    return locals;
  }
};
