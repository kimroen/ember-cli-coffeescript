<%= classifiedModuleName %>Initializer =
  name: '<%= dasherizedModuleName %>'

  # container, app is passed to initialize - add if you need them (you probably do)
  initialize: () ->
    # app.register 'route', 'foo', 'service:foo'

`export default <%= classifiedModuleName %>Initializer`
