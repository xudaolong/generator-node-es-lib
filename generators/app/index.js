(function() {
  "use strict";

  var Generator = require("yeoman-generator");
  var projectName = "";

  module.exports = class extends Generator {
    constructor(args, opts) {
      super(args, opts);
      this.option("babel");
    }

    prompting() {
      console.log(
        "Are you ready to turn this directory into a es6/es7 environment?"
      );
      const that = this;
      return this.prompt([
        {
          type: "input",
          name: "projectName",
          message: "Project name",
          default: this.appname
        },
        {
          type: "input",
          name: "packageName",
          message: "Package name",
          validate: function(i) {
            return /^[a-z0-9]{1,214}$/.test(i)
              ? true
              : "invalid package name see https://docs.npmjs.com/files/package.json#name for details.";
          },
          default: this.appname.toLowerCase()
        },
        {
          type: "input",
          name: "version",
          message: "Project version",
          default: "1.0.0"
        },
        {
          type: "input",
          name: "description",
          message: "Project description",
          default: ""
        },
        {
          type: "input",
          name: "keywords",
          message: "Comma separation keywords",
          default: ""
        },
        {
          type: "input",
          name: "repositoryUrl",
          message: "Repository url",
          default: ""
        },
        {
          type: "input",
          name: "homepage",
          message: "Project homepage",
          default: ""
        },
        {
          type: "input",
          name: "author",
          message: "Author info",
          default: "your-name <your@email.com> (http://your-westie/)"
        }
      ]).then(answers => {
        projectName = answers.projectName;
        that.log("answers", JSON.stringify(answers, null, 4));

        that.fs.copyTpl(
          that.templatePath("."),
          that.destinationPath("../" + answers.projectName),
          {
            projectName: answers.projectName,
            packageName: answers.packageName.toLowerCase(),
            version: answers.version,
            description: answers.description,
            keywords: answers.keywords,
            repositoryUrl: answers.repositoryUrl,
            homepage: answers.homepage,
            author: answers.author
          },
          {},
          { globOptions: { dot: true } }
        );
      });
    }

    install() {
      process.chdir(this.destinationPath("../" + projectName));
      this.npmInstall();
    }
  };
})();
