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
        return protractor_1.element(protractor_1.by.css('h1.header')).getText();
    };
    Angular2AppPage.prototype.getIntroText = function () {
        return protractor_1.element(protractor_1.by.css('.intro')).getText();
    };
    Angular2AppPage.prototype.clickTab = function (name) {
        return protractor_1.element(protractor_1.by.cssContainingText('.menu a.item', name)).click();
    };
    return Angular2AppPage;
}());
exports.Angular2AppPage = Angular2AppPage;
