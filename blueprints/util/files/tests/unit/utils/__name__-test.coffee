`import <%= camelizedModuleName %> from '<%= dasherizedPackageName %>/utils/<%= dasherizedModuleName %>'`

module '<%= camelizedModuleName %>'

# Replace this with your real tests.
test 'it works', ->
  result = <%= camelizedModuleName %>()
  ok result
