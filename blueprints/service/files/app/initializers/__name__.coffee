<%= classifiedModuleName %>Initializer
  name: '<%= dasherizedModuleName %>'
  initialize: (container, app) ->
    app.inject 'route', '<%= camelizedModuleName %>', 'service:<%= camelizedModuleName %>'

`export default <%= classifiedModuleName %>Initializer`
