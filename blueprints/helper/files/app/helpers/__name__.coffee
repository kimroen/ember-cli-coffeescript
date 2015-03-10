`import Ember from 'ember'`

# This function receives the params `params, hash`
<%= camelizedModuleName %> = () ->

<%= classifiedModuleName %>Helper = Ember.HTMLBars.makeBoundHelper <%= camelizedModuleName %>

`export { <%= camelizedModuleName %> }`

`export default <%= classifiedModuleName %>Helper`
