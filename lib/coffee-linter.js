var Filter = require('broccoli-filter');
var CoffeeLint = require('coffeelint').lint;
var chalk = require('chalk');
var fs = require('fs');
var path = require('path');
var ignore = require('ignore');

module.exports = CoffeeScriptLinter;
CoffeeScriptLinter.prototype = Object.create(Filter.prototype);
CoffeeScriptLinter.prototype.constructor = CoffeeScriptLinter;
function CoffeeScriptLinter (inputTree, options) {
  if (!(this instanceof CoffeeScriptLinter)) return new CoffeeScriptLinter(inputTree, options);
  Filter.call(this, inputTree, options);
  options = options || {};
  this.coffeelintJSON = null;
  this.coffeelintignore = null;
  this.formatter = function(filePath, lintResults){
    if(lintResults.length){
      console.log("\n\n==========================================");
      console.log(chalk.yellow("File: "+filePath));
      console.log("==========================================");
      lintResults.forEach(function(error, index){
        if(index != 0){
          console.log("");
        }
        errorColor = chalk.black
        if(error.level == "error") {
          errorColor = chalk.bgRed.white
        } else if(error.level == "warn") {
          errorColor = chalk.bgYellow.black
        }
        console.log(errorColor(" " + error.message + " (" + error.level + ") "));
        console.log("Line:  "+error.lineNumber);
      });
    }
  }

  this.statsFormatter = function(stats){
    var color = chalk.black.bgGreen;
    if(stats.errorCount > 0){
      color = chalk.white.bgRed;
    }
    console.log("\n\n=======================================================");
    console.log("Linting completed on " + stats.fileCount + " files with " + color(" "+stats.errorCount+" ") + " errors.");
    console.log("=======================================================\n");
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

  if(fs.existsSync("./.coffeelintignore")) {
    this.coffeelintignore = ignore().addIgnoreFile('./.coffeelintignore').createFilter();
  }
}

CoffeeScriptLinter.prototype.extensions = ['coffee'];
CoffeeScriptLinter.prototype.targetExtension = 'coffee';

CoffeeScriptLinter.prototype.processString = function (content, relativePath) {
  if(this.coffeelintignore) {
    var shouldPass = this.coffeelintignore("../" + relativePath);
    if(!shouldPass) {
      return content;
    }
  }
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

CoffeeScriptLinter.prototype.write = function(readTree, destDir){
  this.errors = 0;
  this.fileCount = 0;
  var self = this;
  return Filter.prototype.write.apply(this, arguments).then(function(){
    self.statsFormatter({errorCount: self.errors, fileCount: self.fileCount});
  })
}
