'use strict';

var Blueprint = require('ember-cli/lib/models/blueprint');

/**
  Find the non-coffeescript version of the blueprint to bootstrap off
 */
module.exports = function(dasherizedName, project) {
  var projectPaths = project ? project.blueprintLookupPaths() : [];

  projectPaths = projectPaths.filter(function(p) {
    return !p.match(/ember-cli-coffeescript/);
  });

  return Blueprint.lookup(dasherizedName, {
    paths: projectPaths
  });
};
