var fs         = require('fs-extra');
var path       = require('path');
var EOL        = require('os').EOL;
var chalk      = require('chalk');

module.exports = {
  description: 'Generates a route and registers it with the router.',

  availableOptions: [
    {
      name: 'path',
      type: String,
      default: ''
    },
    {
      name: 'skip-router',
      type: Boolean,
      default: false
    }
  ],

  fileMapTokens: function() {
    var blueprint = this.lookupBlueprint('route')
    return blueprint.fileMapTokens.apply(blueprint, arguments);
  },

  shouldTouchRouter: function(name, options) {
    return this.lookupBlueprint('route').shouldTouchRouter(name, options);
  },

  afterInstall: function(options) {
    updateRouter.call(this, 'add', options);
  },

  afterUninstall: function(options) {
    updateRouter.call(this, 'remove', options);
  }
};

function updateRouter(action, options) {
  var entity = options.entity;
  var actionColorMap = {
    add: 'green',
    remove: 'red'
  };
  var color = actionColorMap[action] || 'gray';

  if (this.shouldTouchRouter(entity.name, options)) {
    writeRoute(action, entity.name, options);

    this.ui.writeLine('updating router');
    this._writeStatusToUI(chalk[color], action + ' route', entity.name);
  }
}

function findRouter(options) {
  var routerPathParts = [options.project.root];

  if (options.dummy && options.project.isEmberCLIAddon()) {
    routerPathParts = routerPathParts.concat(['tests', 'dummy', 'app', 'router.coffee']);
  } else {
    routerPathParts = routerPathParts.concat(['app', 'router.coffee']);
  }

  return routerPathParts;
}

function writeRoute(action, name, options) {
  var routerPath = path.join.apply(null, findRouter(options));
  var source = fs.readFileSync(routerPath, 'utf-8');

  var newRoutes;
  if (action === 'add') {
    newRoutes = addRouteToRouter(name, source);
  } else {
    newRoutes = removeRouteFromRouter(name, source);
  }

  fs.writeFileSync(routerPath, newRoutes);
}

function removeRouteFromRouter(name, oldContent) {
  var existence  = new RegExp("(?:route|resource)\\s?\\(?\\s?(['\"])" + name + "\\1");

  if (!existence.test(oldContent)) {
    return oldContent;
  }

  var re = new RegExp('^\\s*@route\\s*\\(?(["\'])\\s*'+ name +'\\s*\\1\\)?', 'm');
  return oldContent.replace(re, '');
}

function addRouteToRouter(name, oldContent) {
  var existence = new RegExp("(?:route|resource)\\s?\\(?\\s?(['\"])" + name + "\\1");

  if (existence.test(oldContent)) {
    return oldContent;
  }

  var funcRegex = /(map\s*->[\s\S]+)(\n^\S+)/m;

  return oldContent.replace(
    funcRegex,
    "$1  @route '" + name + "'" + EOL + "$2"
  );
}
