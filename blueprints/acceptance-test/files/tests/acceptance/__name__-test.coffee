`import Ember from 'ember'`
`import startApp from '../helpers/start-app'`

application = null

module 'Acceptance: <%= classifiedModuleName %>',
  setup: ->
    application = startApp()

  teardown: ->
    Ember.run application, 'destroy'

test 'visiting /<%= dasherizedModuleName %>', ->
  visit '/<%= dasherizedModuleName %>'

  andThen ->
    equal currentPath(), '<%= dasherizedModuleName %>'
