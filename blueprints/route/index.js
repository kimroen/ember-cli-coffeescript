var fs         = require('fs-extra');
var inflection = require('inflection');
var path       = require('path');
var EOL        = require('os').EOL;

module.exports = {
  description: 'Generates a route and registers it with the router.',

  availableOptions: [
    { name: 'type', values: ['route', 'resource'], default: 'route' }
  ],

  fileMapTokens: function() {
    return this.lookupBlueprint('route').fileMapTokens();
  },

  beforeInstall: function(options) {
    this.lookupBlueprint('route').beforeInstall(options);
  },

  shouldTouchRouter: function(name) {
    return this.lookupBlueprint('route').shouldTouchRouter(name);
  },

  afterInstall: function(options) {
    var entity = options.entity;

    if (this.shouldTouchRouter(entity.name) && !options.dryRun) {
      addRouteToRouter(entity.name, {
        type: options.type
      });
    }
  },

  beforeUninstall: function(options) {
    this.lookupBlueprint('route').beforeUninstall(options);
  },

  afterUninstall: function(options) {
    var entity = options.entity;

    if (this.shouldTouchRouter(entity.name) && !options.dryRun) {
      removeRouteFromRouter(entity.name, {
        type: options.type
      });
    }
  }
};

function removeRouteFromRouter(name, options) {
  var type       = options.type || 'route';
  var routerPath = path.join(process.cwd(), 'app', 'router.coffee');
  var oldContent = fs.readFileSync(routerPath, 'utf-8');
  var existence  = new RegExp("(?:route|resource)\\s?\\(?\\s?(['\"])" + name + "\\1");
  var newContent;
  var plural;

  if (!existence.test(oldContent)) {
    return;
  }

  switch (type) {
  case 'route':
    var re = new RegExp('^\\s*@route\\s*\\(?(["\'])\\s*'+ name +'\\s*\\1\\)?', 'm');
    newContent = oldContent.replace(re, '');
    break;
  case 'resource':
    plural = inflection.pluralize(name);

    if (plural === name) {
      var re = new RegExp('^\\s*@resource\\s*\\(?(["\'])\\s*'+ name +'\\s*\\1,?.*\\)?', 'm');
      newContent = oldContent.replace(re, '');
    } else {
      var re = new RegExp('^\\s*@resource\\s*\\(?(["\'])\\s*'+ name +'\\s*\\1,.*\\)?', 'm');
      newContent = oldContent.replace(re, '');
    }
    break;
  }

  fs.writeFileSync(routerPath, newContent);
}

function addRouteToRouter(name, options) {
  var type       = options.type || 'route';
  var routerPath = path.join(process.cwd(), 'app', 'router.coffee');
  var oldContent = fs.readFileSync(routerPath, 'utf-8');
  var existence  = new RegExp("(?:route|resource)\\s?\\(?\\s?(['\"])" + name + "\\1");
  var plural;
  var newContent;

  if (existence.test(oldContent)) {
    return;
  }

  var funcRegex = /(map\s*->[\s\S]+)(\n^\S+)/m;

  switch (type) {
  case 'route':
    newContent = oldContent.replace(
      funcRegex,
      "$1  @route '" + name + "'" + EOL + "$2"
    );
    break;
  case 'resource':
    plural = inflection.pluralize(name);

    if (plural === name) {
      newContent = oldContent.replace(
        funcRegex,
        "$1  @resource '" + name + "', ->" + EOL + "$2"
      );
    } else {
      newContent = oldContent.replace(
        funcRegex,
        "$1  @resource '" + name + "', path: '" + plural + "/:" + name + "_id', ->" + EOL + "$2"
      );
    }
    break;
  }

  fs.writeFileSync(routerPath, newContent);
}
