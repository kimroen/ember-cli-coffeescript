var fs         = require('fs-extra');
var inflection = require('inflection');
var path       = require('path');

module.exports = {
  afterInstall: function(options) {
    var entity = options.entity;
    var isIndex = /index$/.test(entity.name);

    if (!isIndex) {
      addRouteToRouter(entity.name, {
        type: entity.options.type
      });
    }
  }
};

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

  if (name === 'basic') { return; }

  switch (type) {
  case 'route':
    newContent = oldContent.replace(
      funcRegex,
      "$1  @route '" + name + "'\n$2"
    );
    break;
  case 'resource':
    plural = inflection.pluralize(name);

    if (plural === name) {
      newContent = oldContent.replace(
        funcRegex,
        "$1  @resource '" + name + "'\n$2"
      );
    } else {
      newContent = oldContent.replace(
        funcRegex,
        "$1  @resource '" + name + "', path: '" + plural + "/:" + name + "_id'\n$2"
      );
    }
    break;
  }

  fs.writeFileSync(routerPath, newContent);
}
