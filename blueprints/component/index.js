module.exports = {
  normalizeEntityName: function(entityName) {
    var trailingSlash = /(\/$|\\$)/;

    if(trailingSlash.test(entityName)) {
      throw new Error('You specified "' + entityName + '", but you can\'t use a ' +
                      'trailing slash as an entity name with generators. Please ' +
                      're-run the command with "' + entityName.replace(trailingSlash, '') + '".\n');
    }


    if(! /\-/.test(entityName)) {
      throw new Error('You specified "' + entityName + '", but in order to prevent ' +
                      'clashes with current or future HTML element names you must have ' +
                      'a hyphen.\n');
    }

    if(/\//.test(entityName)) {
      throw new Error('You specified "' + entityName + '", but due to a bug in ' +
                      'Handlebars (< 2.0) slashes within components/helpers are not ' +
                      'allowed.\n');
    }

    return entityName;
  }
};
