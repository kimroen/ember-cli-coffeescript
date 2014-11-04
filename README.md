# CoffeeScript support for ember-cli
Adds precompilation of CoffeeScript files and all the basic generation
types to the `ember generate` command.

### Includes
- Generating files in CoffeeScript with `ember generate`
- Preprocessing CoffeeScript-files in your app

### Install
```
npm install ember-cli-coffeescript --save-dev
```

**NB**: This addon requires ember-cli version `0.1.0` and up. It might work on
earlier versions, but I wouldn't know.

### How to use
Run `ember help generate` to get a list of available blueprints.
Use them by running `ember g <blueprint> <args>`, for instance `ember g
controller pants --type=array`

ember-cli-coffeescript comes with pod-support for the same blueprints as ember-cli
does. Check out [the ember-cli docs for pods](http://www.ember-cli.com/#pods)
for instructions on how to use it.

If you have a coffeelint.json file we will automatically pick up on it and start running linting.
If you do not want linting to run when you have a coffeelint.json file use the following configuration.

```javascript
new EmberApp({
  "coffeeOptions": { lint: false }
})
```

If you want to specify a different path for your coffeelint.json file you can specify the path
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

### Roadmap
- [ ] Add CoffeeScript linting
