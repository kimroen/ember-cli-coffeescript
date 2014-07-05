module.exports = {
  locals: function(options) {
    var type = options.entity.options.type;

    return {
      baseClass: type === 'array'  ? 'ArrayController' :
                 type === 'object' ? 'ObjectController' :
                                     'Controller'
    };
  }
};
