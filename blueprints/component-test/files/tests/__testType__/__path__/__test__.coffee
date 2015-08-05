`import { test, moduleForComponent } from 'ember-qunit'`<%= testImports %>

moduleForComponent '<%= componentPathName %>', '<%= friendlyTestDescription %>', {
  <%= testOptions %>
}

test 'it renders', (assert) ->
  <%= testContent %>
