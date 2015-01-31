`import Ember from 'ember'`

<%= camelizedModuleName %> = (app) ->

`export default Ember.Test.registerAsyncHelper('<%= camelizedModuleName %>', <%= camelizedModuleName %>)`
