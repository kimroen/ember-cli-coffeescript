`import Ember from 'ember'`
`import <%= classifiedModuleName %>Mixin from '<%= dasherizedPackageName %>/mixins/<%= dasherizedModuleName %>'`

module '<%= classifiedModuleName %>Mixin'

# Replace this with your real tests.
test 'it works', ->
  <%= classifiedModuleName %>Object = Ember.Object.extend <%= classifiedModuleName %>Mixin
  subject = <%= classifiedModuleName %>Object.create()
  ok subject
