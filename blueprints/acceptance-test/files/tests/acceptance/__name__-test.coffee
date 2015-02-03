`import Ember from 'ember'`
`import startApp from '../helpers/start-app'`

application = null

module 'Acceptance: <%= classifiedModuleName %>',
  setup: ->
    application = startApp()
    ###
    return null as Ember.Application.then is deprecated.
    Newer version of QUnit uses the return value's .then
    function to wait for promises if it exists.
    ###
    null

  teardown: ->
    Ember.run application, 'destroy'

test 'visiting /<%= dasherizedModuleName %>', ->
  visit '/<%= dasherizedModuleName %>'

  andThen ->
    equal currentPath(), '<%= dasherizedModuleName %>'
