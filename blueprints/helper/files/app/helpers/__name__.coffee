`import Ember from 'ember'`

# This function receives the params `params, hash`
<%= camelizedModuleName %> = (params) ->
  return params

<%= classifiedModuleName %>Helper = Ember.HTMLBars.makeBoundHelper <%= camelizedModuleName %>

`export { <%= camelizedModuleName %> }`

`export default <%= classifiedModuleName %>Helper`
