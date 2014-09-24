module.exports = {
  description: 'Generates a component. Name must contain a hyphen.',
  normalizeEntityName: function(entityName) {
    entityName = this.lookupBlueprint('component').normalizeEntityName(entityName);
    return entityName;
  }
};
