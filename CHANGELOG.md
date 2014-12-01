+ Remove blueprints for controller types. See [original commit in ember-cli](https://github.com/stefanpenner/ember-cli/commit/4070bfa0e524df00fcea6ca7fc7cafb5f3858ac2)
### 0.3.2
+ Fix some issues with the generated component tests [#29](https://github.com/kimroen/ember-cli-coffeescript/pull/29)
+ Update `broccoli-coffeescript` to `0.3.0`, enabling support for literate CoffeeScript.

### 0.3.1
+ Add missing dependency [#27](https://github.com/kimroen/ember-cli-coffeescript/pull/27)

## 0.3.0
+ Add support for linting CoffeeScript [#25](https://github.com/kimroen/ember-cli-coffeescript/pull/25)

## 0.2.0
+ Add support for the pod-structure for generated files

### 0.1.2
+ Fix problem with export in generated initializer [#18](https://github.com/kimroen/ember-cli-coffeescript/pull/18)
+ Make a workaround for error when generating a controller without specifying a type
+ Fix said horrible workaround
+ Update dependencies
+ Create a changelog

### 0.1.1
Do not use this version.

## 0.1.0
+ Add descriptions and help to all the blueprints
+ Move tests to separate blueprints to be in line with ember-cli
+ Add test for generated adapters and initializers
+ Use `lookupBlueprint` for duplicated code where possible
+ Make default model test more robust
+ Use `EOL` instead of `\n` where applicable
+ Support destroying blueprints
+ Change default generated serializer from `ActiveModelSerializer` to `RESTSerializer`
+ Update readme with new `type`-syntax for generating controllers

### 0.0.7
+ Fix a naming-problem with generating components

### 0.0.6
+ Update dependencies to fix a problem with installing ember-cli-coffeescript with beta versions of node 2.0

### 0.0.5
+ Generating a helper also generates a test
+ The generated initializer for services is more explicit about being for a service
+ Generating a route called 'basic' doesn't add it to `router.coffee`
+ Generated services are no longer broken

### 0.0.4
+ Check for updates before adding a new route/resource to the route
+ Basic support for older versions of ember-cli

### 0.0.2
+ Add precompilation of coffeescript

### 0.0.1
+ Initial release (generators only)
