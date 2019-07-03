let navigation = new framework.TEST_OBJECT({
    checkFamilyRoomPage: function () {
        this.elems.familyRoomHeader.waitForElementToBeDisplayed();
    },

    reloadPage: function () {
        browser.refresh();
    },

    navigateHomePage: function () {
        browser.get(custom_config.baseUrl);
        this.elems.bedroomSubTab.waitForElementToBeDisplayed();
    },

    navigateTheatherPage: function () {
        this.elems.theatherTab.click();
    },

    locators: {
        bedroomSubTab:    {id: 'bedroom'},
        theatherTab:      {id: 'dashboard-tabs-tab-theater'},
        familyRoomHeader: {id: 'family-room'},
    }
});

module.exports = navigation;