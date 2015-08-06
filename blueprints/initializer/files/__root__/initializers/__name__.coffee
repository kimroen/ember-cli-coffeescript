# Takes two parameters: container and application
initialize = () ->
  # application.register 'route', 'foo', 'service:foo'

<%= classifiedModuleName %>Initializer =
  name: '<%= dasherizedModuleName %>'
  initialize: initialize

`export {initialize}`
`export default <%= classifiedModuleName %>Initializer`
