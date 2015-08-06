`import Ember from 'ember'`
`import { module, test } from 'qunit'`
`import startApp from '<%= testFolderRoot %>/tests/helpers/start-app'`

module 'Acceptance: <%= classifiedModuleName %>',
  beforeEach: ->
    @application = startApp()
    ###
    Don't return anything, because QUnit looks for a .then
    that is present on Ember.Application, but is deprecated.
    ###
    return

  afterEach: ->
    Ember.run @application, 'destroy'

test 'visiting /<%= dasherizedModuleName %>', (assert) ->
  visit '/<%= dasherizedModuleName %>'

  andThen ->
    assert.equal currentURL(), '/<%= dasherizedModuleName %>'
