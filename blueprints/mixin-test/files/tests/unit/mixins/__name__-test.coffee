`import Ember from 'ember'`
`import <%= classifiedModuleName %>Mixin from '../../../mixins/<%= dasherizedModuleName %>'`

module '<%= classifiedModuleName %>Mixin'

# Replace this with your real tests.
test 'it works', ->
  <%= classifiedModuleName %>Object = Ember.Object.extend <%= classifiedModuleName %>Mixin
  subject = <%= classifiedModuleName %>Object.create()
  ok subject
