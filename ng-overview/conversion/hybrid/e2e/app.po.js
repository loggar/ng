"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var Angular2AppPage = /** @class */ (function () {
    function Angular2AppPage() {
    }
    Angular2AppPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    Angular2AppPage.prototype.getHeaderText = function () {
        return protractor_1.element(protractor_1.by.css('h1')).getText();
    };
    Angular2AppPage.prototype.clickNav = function (text) {
        return protractor_1.element(protractor_1.by.cssContainingText('.navLinks a', text)).click();
    };
    Angular2AppPage.prototype.submitForm = function () {
        return protractor_1.element(protractor_1.by.buttonText('Submit')).click();
    };
    Angular2AppPage.prototype.thumbnailText = function (i) {
        return protractor_1.element.all(protractor_1.by.css('.thumbnail')).get(i).getText();
    };
    return Angular2AppPage;
}());
exports.Angular2AppPage = Angular2AppPage;
