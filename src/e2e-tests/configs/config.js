const report = require('cucumber-html-reporter');
const path = require('path');
const fs = require('fs');
const reportsDir = path.resolve(__dirname, '../reports');

if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir);
}

let config = {
    specs: ['../test_features/*.feature'],
    seleniumAddress: 'http://localhost:4723/wd/hub',
    framework: 'custom',
    ignoreUncaughtExceptions: true,
    frameworkPath: require.resolve('../node_modules/protractor-cucumber-framework'),

    capabilities: {
        browserName: 'Chrome',
    },

    onPrepare: function () {
        require('./init');
        browser.manage().timeouts().implicitlyWait(5000);
        browser.ignoreSynchronization = true;
    },

    onCleanUp: function () {
        let options = {
            theme: 'bootstrap',
            jsonFile: path.resolve(__dirname, '../reports/report.json'),
            output: path.resolve(__dirname, '../reports/report.html'),
            reportSuiteAsScenarios: true,
            launchReport: false,
            metadata: {
                'Test Environment': 'Local'
            }
        };
        report.generate(options);
    },
    cucumberOpts: {
        require: '../step_definitions/*.js',
        tags: false,
        profile: false,
        'no-source': true,
        format:'json:' + path.resolve(__dirname, '../reports/report.json'),
    }
};

exports.config = config;
