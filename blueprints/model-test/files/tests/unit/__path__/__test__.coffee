`import { moduleForModel, test } from 'ember-qunit'`

moduleForModel '<%= dasherizedModuleName %>', '<%= friendlyDescription %>', {
  # Specify the other units that are required for this test.
<%= typeof needs !== 'undefined' ? needs : '' %>
}

test 'it exists', (assert) ->
  model = @subject()
  # store = @store()
  assert.ok !!model
