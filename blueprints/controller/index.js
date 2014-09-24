module.exports = {
  description: 'Generates a controller of the given type.',

  availableOptions: [
    { name: 'type', values: ['basic', 'object', 'array'], default: 'basic' }
  ],

  beforeInstall: function(options) {
    this.lookupBlueprint('controller').beforeInstall(options);
  },
  locals: function(options) {
    return this.lookupBlueprint('controller').locals(options);
  }
};
