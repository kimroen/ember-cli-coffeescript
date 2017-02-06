# CoffeeScript support for ember-cli [![Build Status](https://travis-ci.org/kimroen/ember-cli-coffeescript.svg?branch=master)](https://travis-ci.org/kimroen/ember-cli-coffeescript)
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

**NB**: ember-cli-coffeescript is tested using ember-cli version `2.3.0` and up. Some of it probably works on
earlier versions, but I wouldn't know.

### How to use

#### Blueprints
Run `ember help generate` to get a list of available blueprints. Use them by running `ember g <blueprint> <args>`. For instance, to generate a component:

```
ember g component my-component
```

ember-cli-coffeescript comes with pod-support for the same blueprints as ember-cli
does. Check out [the ember-cli docs for pods](https://ember-cli.com/user-guide/#using-pods)
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

You can set `lint` to `true` to enable linting with the default configurations even without a custom `coffeelint.json` file.

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

If you want to change the way we format the linting output you can specify custom error output and stats output functions:

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

### Developing
- `git clone` this repository
- `npm install`
- `bower install`
- `npm link`

Because of the nature of this project, it needs to be consumed by an ember-cli project to be properly developed.

- Add `"ember-cli-coffeescript": "*"` to your consuming project's `package.json`
- From your project root run `npm link ember-cli-coffeescript`

### Running Tests
- `ember test`
- `npm run embertest`
- `npm run nodetest`

To run all the tests:

- `npm test`
