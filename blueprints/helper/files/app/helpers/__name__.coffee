`import Ember from 'ember'`

<%= camelizedModuleName %> = (value) ->
  value

<%= classifiedModuleName %>Helper = Ember.HTMLBars.makeBoundHelper <%= camelizedModuleName %>

`export { <%= camelizedModuleName %> }`

`export default <%= classifiedModuleName %>Helper`
