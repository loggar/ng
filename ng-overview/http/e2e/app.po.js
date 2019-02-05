"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var Angular2AppPage = /** @class */ (function () {
    function Angular2AppPage() {
    }
    Angular2AppPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    Angular2AppPage.prototype.pushButton = function (text) {
        return protractor_1.element(protractor_1.by.buttonText(text)).click();
    };
    Angular2AppPage.prototype.getResultsText = function (exampleElemName) {
        return protractor_1.element(protractor_1.by.css(exampleElemName + " pre")).getText();
    };
    Angular2AppPage.prototype.search = function (text) {
        return protractor_1.element(protractor_1.by.css("youtube-search input")).sendKeys(text);
    };
    Angular2AppPage.prototype.getSearchText = function () {
        return protractor_1.element(protractor_1.by.css("youtube-search")).getText();
    };
    return Angular2AppPage;
}());
exports.Angular2AppPage = Angular2AppPage;
