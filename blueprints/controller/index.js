module.exports = {
  description: 'Generates a controller of the given type.',

  availableOptions: [
    { name: 'type', values: ['basic', 'object', 'array'], default: 'basic' }
  ],

  beforeInstall: function(options) {
    return require('ember-cli/blueprints/controller').beforeInstall.call(this, options);
  },
  locals: function(options) {
    return this.lookupBlueprint('controller').locals(options);
  }
};
