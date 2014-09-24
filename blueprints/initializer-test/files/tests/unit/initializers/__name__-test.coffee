`import Ember from 'ember'`
`import { initialize } from '<%= dasherizedPackageName %>/initializers/<%= dasherizedModuleName %>'`

container = null
application = null

module '<%= classifiedModuleName %>Initializer',
  setup: ->
    Ember.run ->
      container = new Ember.Container()
      application = Ember.Application.create()
      application.deferReadiness()

# Replace this with your real tests.
test 'it works', ->
  initialize container, application

  # you would normally confirm the results of the initializer here
  ok true
