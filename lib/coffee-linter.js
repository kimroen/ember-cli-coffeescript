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
  this.formatter = function(filePath, lintResults){
    if(lintResults.length){
      console.log("\n\n==========================================");
      console.log(chalk.yellow("File: "+filePath));
      console.log("==========================================");
      lintResults.forEach(function(error, index){
        if(index != 0){
          console.log("");
        }
        if(error.level == "error") {
          console.log(chalk.bgRed.white(" " + error.message + " "));
        } else if(error.level == "warn") {
          console.log(chalk.bgYellow.black(" " + error.message + " "));
        } else {
          console.log(error.message);
        }

        console.log("Line:  "+error.lineNumber);
        if(error.line){
          console.log("Line:  "+chalk.cyan(error.line));
        }
        console.log("Level: "+error.level);
      });
    }
  }

  this.statsFormatter = function(stats){
    var color = chalk.bgGreen;
    if(stats.count > 0){
      color = chalk.bgRed;
    }
    console.log("\n\n==========================================");
    console.log("Linting completed on " + stats.fileCount + " files with " + color(" "+stats.errorCount+" ") + " errors.");
    console.log("==========================================\n");
  }

  if(options.formatter){
    this.formatter = options.formatter;
  }
  if(options.statsFormatter){
    this.statsFormatter = options.statsFormatter;
  }

  var rawCoffeeLintConfiguration = null;
  if (options.configPath) {
    rawCoffeeLintConfiguration = fs.readFileSync(options.configPath, "utf-8");
  } else if (fs.existsSync("./coffeelint.json")) {
    rawCoffeeLintConfiguration = fs.readFileSync('./coffeelint.json', "utf-8");
  }
  if (rawCoffeeLintConfiguration) {
    try {
      this.coffeelintJSON = JSON.parse(rawCoffeeLintConfiguration);
    } catch(e) {
      throw 'Unable to parse json file: ' + path.resolve(options.coffeelintJSON)
    }
  }
}

CoffeeScriptFilter.prototype.extensions = ['coffee'];
CoffeeScriptFilter.prototype.targetExtension = 'coffee';

CoffeeScriptFilter.prototype.processString = function (content, relativePath) {
  try {
    var lintResults = CoffeeLint(content, this.coffeelintJSON);
    this.errors += lintResults.length;
    this.fileCount++;
    this.formatter(relativePath, lintResults);
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
    this.statsFormatter({errorCount: self.errors, fileCount: self.fileCount});
  })
}
