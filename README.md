# CoffeeScript support for ember-cli
Adds precompilation of CoffeeScript files and all the basic generation
types to the `ember generate` command, as well as linting.

### Includes
- Generating files in CoffeeScript with `ember generate`
- Preprocessing CoffeeScript-files in your app, including tests
- Linting your CoffeeScript-files.

### Install
```
ember install ember-cli-coffeescript
```

**NB**: Is is tested using ember-cli version `1.13.0` and up. Some of it probably works on
earlier versions, but I wouldn't know.

### How to use

#### CoffeeScript and ember-cli
There is one thing to note when using CoffeeScript with ember-cli: the syntax for _ES6-modules_.
In ember-cli-apps written in JavaScript, this is a common pattern:

```js
// app/components/my-component.js
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div'
});
```

Writing `import` or `export` in a CoffeeScript-file causes an error, so we'll need
to escape these lines with backticks so they run as JavaScript.

We also need to store the export in a variable to export at the end, we can't export
directly as done above. Please note that the name of this variable does not affect
the name of the component itself - that is based entirely on the file name and placement.

Here's the above file in CoffeeScript:

```coffee
# app/components/my-component.coffee
`import Ember from 'ember'`

MyComponent = Ember.Component.extend
  tagName: 'div'

`export default MyComponent`
```

Luckily, all the blueprints included with ember-cli-coffeescript do this for you! Which
leads to…

#### Blueprints
Run `ember help generate` to get a list of available blueprints. Use them by running `ember g <blueprint> <args>`. For instance, to generate the above component:

```
ember g component my-component
```

ember-cli-coffeescript comes with pod-support for the same blueprints as ember-cli
does. Check out [the ember-cli docs for pods](http://www.ember-cli.com/#pods)
for instructions on how to use it.

If you'd like to use ember-cli-coffeescript without the blueprints, you can add
the following to your `config/environment.js`:

```js
ENV.coffeeOptions = {
  blueprints: false
}
```

This will make it fall back to the next blueprints in line (probably the ones
from ember-cli).

#### Precompiling
This will happen automatically - no work necessary.

#### Linting
If you have a `coffeelint.json` file in the root of you project we will automatically pick up on it and start running linting on files when using the `ember build` and `ember serve` commands.
If you do not want linting to run despite having a `coffeelint.json` file, use the following configuration
in your `config/environment.js`.

```js
ENV.coffeeOptions = {
  lint: false
}
```

You can set `lint` to `true` to enable linting with the default configurations, but you will probably
want to add a `coffeelint.json` file to the root of your project either way, for instance to turn
off the error for backticks.

Example `coffeelint.json`:

```json
{
    "no_backticks": {
        "level": "ignore"
    }
}
```

You can find all the [available options on the website for `coffeelint`](http://www.coffeelint.org/#options).

If you want to specify a different path for your `coffeelint.json` file you can specify the path
(relative to the project directory or absolute)

```js
ENV.coffeeOptions = {
  lint: {
    configPath: "configurations/coffeelint.json"
  }
}
```

If you want to change the way we format the output you can specify a custom error output and stats output

```js
ENV.coffeeOptions = {
  lint: {
    formatter: function(filePath, lintResults) {  },
    statsFormatter: function(stats) { console.log('Files: ', stats.fileCount, "Errors: ", stats.errorCount) }
  }
}
```

**NOTE:** The lint results will show up twice when you build and run your app; once
for the app files, and then once for the test files. On rebuild, only the changed
files are linted.

##### Lintignore
To avoid linting specific files or folders, you can put a file named `.coffeelintignore`
in the root of your project containing ignore-rules, one per line. This is just like a
`.gitignore`-file, and it will follow the same rules.
