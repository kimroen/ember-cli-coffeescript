# Takes two parameters: container and app
initialize = () ->
  # app.register 'route', 'foo', 'service:foo'

<%= classifiedModuleName %>Initializer =
  name: '<%= dasherizedModuleName %>'
  initialize: initialize

`export {initialize}`
`export default <%= classifiedModuleName %>Initializer`
