<%= classifiedModuleName %>Initializer =
  name: '<%= dasherizedModuleName %>-service'
  initialize: (container, app) ->
    app.inject 'route', '<%= camelizedModuleName %>Service', 'service:<%= dasherizedModuleName %>'

`export default <%= classifiedModuleName %>Initializer`
