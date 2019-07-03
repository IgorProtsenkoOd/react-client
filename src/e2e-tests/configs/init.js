global.expect = require('chai')
    .use(require('chai-as-promised'))
    .use(require('chai-string'))
    .expect;
global.custom_config = require("./custom_config");
global.framework = require('../framework');

global.step = browser.controlFlow();
global.helper = framework.helper;
global.navigation = require('../step_definitions/pages/navigationPage');