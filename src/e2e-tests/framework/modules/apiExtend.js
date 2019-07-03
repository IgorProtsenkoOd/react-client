let apiExtend = {
    _text: '',

    findElementByTextAndClick: function (elements, expectedText) {
        step.execute(function () {
            elements._all.each(function (element) {
                element.getText().then(function (text) {
                    if (text.trim() === expectedText) {
                        element.click();
                        element.click();
                    }
                })
            })
        });
    },

    /**
     * @param {object}  element
     * @param {int}     [timeout]
     * @param {string}     [description]
     * */
    waitForElementToBeDisplayed: function (element, timeout, description) {
        timeout = timeout || 15;
        helper.sleep();
        browser.wait(function () {
            return element._first.isDisplayed().then(function (displayed) {
                if (displayed) {
                    browser.sleep(300);
                    return true;
                } else {
                    return false;
                }
            }, function () {
            });
        }, timeout * 1000, description);
    },

    waitForElementToBeDisplayedAndCheckText: function (element, timeout, expectedText) {
        timeout = timeout || 15;
        helper.sleep();
        return browser.wait(function () {
            return element.getText().then(function (text) {
                expect(text).to.contain(expectedText);
                return true;
            });
        }, timeout * 1000);
    },

    /**
     * @param {object}  element
     * @param {int}     [timeout]
     * @param {string}     [description]
     * */
    waitForElementToBeDisplayedAndClick: function (element, timeout, description) {
        timeout = timeout || 15;
        helper.sleep();
        browser.wait(function () {
            return element._first.isDisplayed().then(function (displayed) {
                if (displayed) {
                    browser.sleep(300);
                    element._first.lazyClick();
                    return true;
                } else {
                    return false;
                }
            }, function () {
            });
        }, timeout * 1000, description);
    },
};

module.exports = apiExtend;