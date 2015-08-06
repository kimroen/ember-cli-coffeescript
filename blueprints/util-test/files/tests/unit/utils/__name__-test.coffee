`import <%= camelizedModuleName %> from '../../../utils/<%= dasherizedModuleName %>'`
`import { module, test } from 'qunit'`

module '<%= friendlyTestName %>'

# Replace this with your real tests.
test 'it works', (assert) ->
  result = <%= camelizedModuleName %>()
  assert.ok result
