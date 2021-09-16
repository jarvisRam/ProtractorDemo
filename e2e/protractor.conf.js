// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

//const { SpecReporter } = require("jasmine-spec-reporter");

const { htmlReporter } = require("cucumber-html-reporter")
const { protractor } = require("protractor")

exports.config = {
  allScriptsTimeout: 11000,
  specs: ["../e2e/Features/*.feature"],
  capabilities: {
    browserName: "chrome"
  },
  directConnect: true,
  baseUrl: "http://automationpractice.com/",
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),

  //Below are jasmine specific configs hence commented out

  //jasmineNodeOpts: {
  //  showColors: true,
  //  defaultTimeoutInterval: 30000,
  //  print: function() {}
  //},
  //onPrepare() {
  //  require("ts-node").register({
  //    project: require("path").join(__dirname, "./tsconfig.e2e.json")
  //  });
  //  jasmine
  //    .getEnv()
  //    .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  //}

  //Prepare for test execution
  onPrepare: function () {
    require("ts-node").register({
          project: require("path").join(__dirname, "./tsconfig.e2e.json")
    });
  },

  //Create report on completion
  onComplete: () => {
    var reporter = require('cucumber-html-reporter');
    var options = {
      theme: 'bootstrap',
      jsonFile: './results.json',
      output: './results.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      output: './report/cucumber_report.html',
    };
    reporter.generate(options);
  },


  //Cucumber specific setup

  cucumberOpts: {
    require: ["../e2e/step-definitions/**/*.ts", "../e2e/Hooks.ts", "../e2e/timeouts.ts"],
    tags: false,
    format: ['progress', 'json:results.json'],
    compiler: "ts:ts-node/register"
  },

  //Allow Cucumber to handle exceptions
  ignoreUncaughtExceptions: true

};
