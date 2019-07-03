let helper = {
    getCallback: function (callback) {
        return step.execute(function () {
            helper.sleep();
            return callback();
        });
    },

    printPage: function () {
        browser.getPageSource().then(function (text) {
            console.log(text);
        });
    },

    /**
     * @param {int}  [timeout]
     * */
    sleep: function (timeout) {
        timeout = timeout || 1;
        let counter = 0;
        browser.wait(function () {
            if (counter < timeout) {
                browser.sleep(1000);
                counter++;
                return false;
            } else {
                return true;
            }
        }, timeout * 1500);
    },
};

module.exports = helper;