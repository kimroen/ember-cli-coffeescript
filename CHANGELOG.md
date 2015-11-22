### 1.13.2
Makes rebuilds faster when linting your CoffeeScript by using `broccoli-persistent-filter`. Many thanks to [@johnnyshields](https://github.com/johnnyshields) and [@stefanpenner](https://github.com/stefanpenner) for making this happen.

+ Upgrade `CoffeeScriptLinter` to `broccoli-persistent-filter` [#95](https://github.com/kimroen/ember-cli-coffeescript/pull/95)

### 1.13.1
Updates CoffeeScript to version 1.10.0. [See their changelog](http://coffeescript.org/#1.10.0).

+ Upgrade `broccoli-coffee` to 0.5.0 [#90](https://github.com/kimroen/ember-cli-coffeescript/pull/90)

## 1.13.0
*Note:* The generated tests from components require you to have [`ember-cli-htmlbars-inline-precompile`](https://github.com/pangratz/ember-cli-htmlbars-inline-precompile) installed with at least version 0.2.0.

+ Updated all blueprints to match the ember-cli 1.13-range [#89](https://github.com/kimroen/ember-cli-coffeescript/pull/89). Some highlights:
  + Generated helpers use `Ember.Helper.helper` instead of `Ember.HTMLBars.makeBoundHelper`
  + Generated component-tests are now integration tests by default. See note above
  + This fixes some issues when using this combined with pods in various configurations
  + All generators should generally work in addons now
+ Updated depended-on ember-cli version which gets rid of some warnings [#85](https://github.com/kimroen/ember-cli-coffeescript/pull/85)
+ Fix exceptions when using `ember destroy route` or `ember generate route` [#88](https://github.com/kimroen/ember-cli-coffeescript/pull/88)

## 0.11.0
+ Generating components in addons now works [#67](https://github.com/kimroen/ember-cli-coffeescript/pull/67)
+ If both coffeescript and babel is used, now coffee runs first [#74](https://github.com/kimroen/ember-cli-coffeescript/pull/74)
+ Blueprint-tweaks:
  + Use `currentURL` instead of `currentPath` in acceptance-test [ember-cli#3755](https://github.com/ember-cli/ember-cli/pull/3755)
  + Capitalize properly in component-test [ember-cli#3469](https://github.com/ember-cli/ember-cli/pull/3469)
  + Fix helper test failing by default [ember-cli#3493](https://github.com/ember-cli/ember-cli/pull/3493)
  + Improved serializer-test blueprint [ember-cli#3762](https://github.com/ember-cli/ember-cli/pull/3762)

## 0.10.0
+ Blueprint improvements for ember-cli 0.2.0
  + Extend from Ember.Service in service blueprint [#58](https://github.com/kimroen/ember-cli-coffeescript/pull/58)
  + Use Ember.HTMLBars by default in helpers [ember-cli#3383](https://github.com/ember-cli/ember-cli/pull/3383) [ember-cli#3410](https://github.com/ember-cli/ember-cli/pull/3410)
+ Update broccoli-coffee to ~0.4.0
+ Fix filtering to use CoffeeScript extensions [#64](https://github.com/kimroen/ember-cli-coffeescript/pull/64)
+ Update chalk to ^1.0.0 [#63](https://github.com/kimroen/ember-cli-coffeescript/pull/63)

## 0.9.1
+ Add compatibility with upcoming changes in ember-cli 0.2.0 [#60](https://github.com/kimroen/ember-cli-coffeescript/pull/60)

## 0.9.0
+ Update blueprints for ember-cli 0.1.13
  + Removed classifiedModuleName from moduleFor. They are optional now. [#57](https://github.com/kimroen/ember-cli-coffeescript/pull/57)
  + Made all the changes necessary for qunit 2.0 compatibility [#54](https://github.com/kimroen/ember-cli-coffeescript/pull/54)

## 0.8.1
+ Fix a problem in the acceptance-test blueprint to not hang by default [#51](https://github.com/kimroen/ember-cli-coffeescript/pull/51)
+ Fix a problem with config not being respected in test [#55](https://github.com/kimroen/ember-cli-coffeescript/pull/55)

## 0.8.0
+ Update blueprints for ember-cli 0.1.12
  + Add test helper blueprint [ember-cli#3049](https://github.com/ember-cli/ember-cli/pull/3049)
  + Use relative paths in test blueprints [ember-cli#3154](https://github.com/ember-cli/ember-cli/pull/3154)
+ Fix the resources blueprint [#50](https://github.com/kimroen/ember-cli-coffeescript/pull/50)

## 0.7.0
+ Update blueprints for ember-cli 0.1.5
  + Check presence of needs in model-test blueprints before emitting [ember-cli#2829](https://github.com/ember-cli/ember-cli/pull/2829)
  + Reference app instance as application in generated acceptance-tests [ember-cli#2659](https://github.com/ember-cli/ember-cli/pull/2659)
  + Add aliases `-resource` and `-route` to the route blueprint [ember-cli#2565](https://github.com/ember-cli/ember-cli/pull/2565)
+ Add support for `.coffeelintignore`-files [#45](https://github.com/kimroen/ember-cli-coffeescript/pull/45)

## 0.6.0
+ Make blueprints optional (defaults to include).
+ Move `coffeeOptions` from `Brocfile.js` to `config/environment.js`. See `README`
for more details on how to use.

## 0.5.0
+ Update blueprints for ember-cli 0.1.4
  + Use the Ember.Applications container for initializer tests. [ember-cli#2582](https://github.com/stefanpenner/ember-cli/pull/2582)
  + Use project.root instead of process.cwd() in route blueprints. [ember-cli#2604](https://github.com/stefanpenner/ember-cli/pull/2604)

## 0.4.0
+ Support pod-structure for
  + adapters
  + serializers
  + transforms
+ Support pod-structure for tests. Added:
  + `component-test`
  + `controller-test`
  + `model-test`
  + `route-test`
  + `serializer-test`
  + `transform-test`
  + `view-test`
+ Remove blueprints for controller types. See [original commit in ember-cli](https://github.com/stefanpenner/ember-cli/commit/4070bfa0e524df00fcea6ca7fc7cafb5f3858ac2)
+ Make generated relationships in models use dasherized names. [Ref issue ember-cli](https://github.com/stefanpenner/ember-cli/issues/2350)

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
