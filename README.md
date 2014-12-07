# CoffeeScript support for ember-cli
Adds precompilation of CoffeeScript files and all the basic generation
types to the `ember generate` command, as well as linting.

### Includes
- Generating files in CoffeeScript with `ember generate`
- Preprocessing CoffeeScript-files in your app
- Linting your CoffeeScript-files.

### Install
```
npm install ember-cli-coffeescript --save-dev
```

**NB**: This addon requires ember-cli version `0.1.4` and up. It might work on
earlier versions, but I wouldn't know.

### How to use

#### Blueprints
Run `ember help generate` to get a list of available blueprints.
Use them by running `ember g <blueprint> <args>`, for instance `ember g
controller pants --type=array`

ember-cli-coffeescript comes with pod-support for the same blueprints as ember-cli
does. Check out [the ember-cli docs for pods](http://www.ember-cli.com/#pods)
for instructions on how to use it.

#### Precompiling
This will happen automatically - no work necessary.

#### Linting
If you have a `coffeelint.json` file we will automatically pick up on it and start running linting.
If you do not want linting to run when you have a `coffeelint.json` file use the following configuration
in your `Brocfile.js`.

```javascript
new EmberApp({
  "coffeeOptions": { lint: false }
})
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

```javascript
new EmberApp({
  "coffeeOptions":{
    lint:{
      configPath: "configurations/coffeelint.json"
    }
  }
})
```

If you want to change the way we format the output you can specify a custom error output and stats output

```javascript
new EmberApp({
  "coffeeOptions":{
    lint:{
      formatter: function(filePath, lintResults){  },
      statsFormatter: function(stats){ console.log('Files: ', stats.fileCount, "Errors: ", stats.errorCount) }
    }
  }
})
```
