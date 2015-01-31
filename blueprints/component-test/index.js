module.exports = {
  description: 'Generates a component unit test.',

  fileMapTokens: function() {
    return this.lookupBlueprint('component-test').fileMapTokens();
  }
};
