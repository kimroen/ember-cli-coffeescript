`import { test, moduleFor } from 'ember-qunit'`

moduleFor 'transform:<%= dasherizedModuleName %>', {
  # Specify the other units that are required for this test.
  # needs: ['serializer:foo']
}

# Replace this with your real tests.
test 'it exists', (assert) ->
  transform = @subject()
  assert.ok transform
