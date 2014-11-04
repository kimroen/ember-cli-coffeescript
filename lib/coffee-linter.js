var Filter = require('broccoli-filter');
var CoffeeLint = require('coffeelint').lint;
var chalk = require('chalk');
var fs = require('fs');
var path = require('path');

module.exports = CoffeeScriptFilter;
CoffeeScriptFilter.prototype = Object.create(Filter.prototype);
CoffeeScriptFilter.prototype.constructor = CoffeeScriptFilter;
function CoffeeScriptFilter (inputTree, options) {
  if (!(this instanceof CoffeeScriptFilter)) return new CoffeeScriptFilter(inputTree, options);
  Filter.call(this, inputTree, options);
  options = options || {};
  this.coffeelintJSON = null;

  var rawCoffeeLintConfiguration = null
  if (options.configPath) {
    rawCoffeeLintConfiguration = fs.readFileSync(options.configPath, "utf-8");
  } else if (fs.existsSync("./coffeelint.json")) {
    rawCoffeeLintConfiguration = fs.readFileSync('./coffeelint.json', "utf-8");
  }
  if (rawCoffeeLintConfiguration) {
    try {
      this.coffeelintJSON = JSON.parse(rawCoffeeLintConfiguration);
    } catch(e) {
      throw 'Unable to parse json file: ', path.resolve(options.coffeelintJSON)
    }
  }
}

CoffeeScriptFilter.prototype.extensions = ['coffee'];
CoffeeScriptFilter.prototype.targetExtension = 'coffee';

CoffeeScriptFilter.prototype.processString = function (content, relativePath) {
  try {
    var lintResults = CoffeeLint(content, this.coffeelintJSON);

    if(lintResults.length){
      console.log("\n\n==========================================");
      console.log(chalk.yellow("File: "+relativePath));
      console.log("==========================================");
      this.errors += lintResults.length;
      lintResults.forEach(function(error, index){
        if(index != 0){
          console.log("");
        }
        if(error.level == "error") {
          console.log(chalk.bgRed(error.message));
        } else if(error.level == "warn") {
          console.log(chalk.bgYellow(error.message));
        } else {
          console.log(error.message);
        }

        console.log("Line: "+error.lineNumber);
        if(error.line){
          console.log("Line: "+chalk.cyan(error.line));
        }
        console.log("Level: "+error.level);
      });
    }
    return content;
  } catch (err) {
    err.line = err.location && err.location.first_line;
    err.column = err.location && err.location.first_column;
    throw err
  }
};

CoffeeScriptFilter.prototype.write = function(readTree, destDir){
  this.errors = 0;
  var self = this;
  return Filter.prototype.write.apply(this, arguments).then(function(){
    if(self.errors > 0){
      console.log("\n\n==========================================");
      console.log("Linting completed with " + chalk.bgRed(" "+self.errors+" ") + " errors.")
      console.log("==========================================\n");
    }
  })
}
