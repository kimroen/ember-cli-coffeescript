`import Ember from 'ember'`
<%= importTemplate %>
<%= classifiedModuleName %>Component = Ember.Component.extend(<%=contents%>)

`export default <%= classifiedModuleName %>Component`
