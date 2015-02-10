`import Ember from 'ember'`
`import { module, test } from 'qunit'`
`import startApp from '../helpers/start-app'`

application = null

module 'Acceptance: <%= classifiedModuleName %>',
  beforeEach: ->
    application = startApp()
    ###
    Don't return as Ember.Application.then is deprecated.
    Newer version of QUnit uses the return value's .then
    function to wait for promises if it exists.
    ###
    return

  afterEach: ->
    Ember.run application, 'destroy'

test 'visiting /<%= dasherizedModuleName %>', (assert) ->
  visit '/<%= dasherizedModuleName %>'

  andThen ->
    assert.equal currentPath(), '<%= dasherizedModuleName %>'
