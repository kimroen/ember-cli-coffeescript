`import { test, moduleForComponent } from 'ember-qunit'`

moduleForComponent '<%= dasherizedModuleName %>', '<%= classifiedModuleName %>Component', {
  # specify the other units that are required for this test
  # needs: ['component:foo', 'helper:bar']
}

test 'it renders', ->
  expect 2

  # creates the component instance
  component = @subject()
  equal component.state, 'preRender'

  # appends the component to the page
  @append()
  equal component.state, 'inDOM'
