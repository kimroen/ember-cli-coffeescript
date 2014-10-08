module.exports = {
  description: 'Generates a controller of the given type.',

  availableOptions: [
    { name: 'type', values: ['basic', 'object', 'array'], default: 'basic' }
  ],

  beforeInstall: function(options) {
    var controllerBlueprint = this.lookupBlueprint('controller');
    return controllerBlueprint.beforeInstall(options);
  },
  locals: function(options) {
    return this.lookupBlueprint('controller').locals(options);
  }
};
