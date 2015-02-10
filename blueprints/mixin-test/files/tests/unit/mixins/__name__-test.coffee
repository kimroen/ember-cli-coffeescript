`import Ember from 'ember'`
`import <%= classifiedModuleName %>Mixin from '../../../mixins/<%= dasherizedModuleName %>'`
`import { module, test } from 'qunit'`

module '<%= classifiedModuleName %>Mixin'

# Replace this with your real tests.
test 'it works', (assert) ->
  <%= classifiedModuleName %>Object = Ember.Object.extend <%= classifiedModuleName %>Mixin
  subject = <%= classifiedModuleName %>Object.create()
  assert.ok subject
