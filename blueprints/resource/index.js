var inflection = require('inflection');
var Promise    = require('ember-cli/lib/ext/promise');
var merge      = require('lodash').merge;
var Blueprint  = require('ember-cli/lib/models/blueprint');

module.exports = {
  description: 'Generates a model and route.',

  install: function(options) {
    this.project = options.project;
    return this._process('install', options);
  },

  uninstall: function(options) {
    this.project = options.project;
    return this._process('uninstall', options);
  },

  _processBlueprint: function(type, name, options) {
    var mainBlueprint = Blueprint.lookup(name, {
      ui: this.ui,
      analytics: this.analytics,
      project: this.project,
      paths: this.project.blueprintLookupPaths()
    });

    var thisBlueprint = this;

    return Promise.resolve()
      .then(function() {
        return mainBlueprint[type](options);
      })
      .then(function() {
        var testBlueprint = mainBlueprint.lookupBlueprint(name + '-test', {
          ui: thisBlueprint.ui,
          analytics: thisBlueprint.analytics,
          project: thisBlueprint.project,
          paths: thisBlueprint.project.blueprintLookupPaths(),
          ignoreMissing: true
        });

        if (!testBlueprint) { return; }

        if (testBlueprint.locals === Blueprint.prototype.locals) {
          testBlueprint.locals = function(options) {
            return mainBlueprint.locals(options);
          };
        }

        return testBlueprint[type](options);
      });
  },

  _process: function(type, options) {
    var modelOptions = merge({}, options, {
      entity: {
        name: inflection.singularize(options.entity.name)
      }
    });

    var routeOptions = merge({}, options);

    var self = this;
    return this._processBlueprint(type, 'model', modelOptions)
               .then(function() {
                 return self._processBlueprint(type, 'route', routeOptions);
               });
  }
};
