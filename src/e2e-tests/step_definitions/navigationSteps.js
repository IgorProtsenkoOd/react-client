let {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

    Given(/^I am a user at the home page$/, function (callback) {
        navigation.navigateHomePage();
        helper.getCallback(callback);
    });

    When(/^I navigate to Theather page$/, function (callback) {
        navigation.navigateTheatherPage();
        helper.getCallback(callback);
    });

    When(/^I reload page$/, function (callback) {
        navigation.navigateTheatherPage();
        helper.getCallback(callback);
    });

    Then(/^I should see Family room page$/, function (callback) {
        navigation.checkFamilyRoomPage();
        helper.getCallback(callback);
    });
});