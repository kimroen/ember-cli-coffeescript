`import Ember from 'ember'`
`import { initialize } from '../../../initializers/<%= dasherizedModuleName %>'`

container = null
application = null

QUnit.module '<%= classifiedModuleName %>Initializer',
  beforeEach: ->
    Ember.run ->
      application = Ember.Application.create()
      container = application.__container__
      application.deferReadiness()

# Replace this with your real tests.
QUnit.test 'it works', (assert) ->
  initialize container, application

  # you would normally confirm the results of the initializer here
  assert.ok true
