'use strict';

var Blueprint = require('ember-cli/lib/models/blueprint');
var path = require('path');
var coffeeScriptPath = path.resolve(__dirname, '../..', 'blueprints');

/**
  Find the non-coffeescript version of the blueprint to bootstrap off
 */
module.exports = function(dasherizedName, project) {
  var projectPaths = project ? project.blueprintLookupPaths() : [];

  projectPaths = projectPaths.filter(function(p) {
    return p !== coffeeScriptPath;
  });

  projectPaths = projectPaths.concat(legacyBlueprintsPath());

  return Blueprint.lookup(dasherizedName, {
    paths: projectPaths
  });
};

function legacyBlueprintsPath() {
  return path.join(
    path.dirname(
      require.resolve('ember-cli-legacy-blueprints')
    ),
    'blueprints'
  );
}
