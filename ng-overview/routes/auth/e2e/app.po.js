"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var Angular2AppPage = /** @class */ (function () {
    function Angular2AppPage() {
    }
    Angular2AppPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    Angular2AppPage.prototype.getPageHeaderText = function () {
        return protractor_1.element(protractor_1.by.css(".page-header h1")).getText();
    };
    Angular2AppPage.prototype.getHeaderText = function () {
        return protractor_1.element(protractor_1.by.css("#content h1")).getText();
    };
    Angular2AppPage.prototype.clickLink = function (text) {
        return protractor_1.element(protractor_1.by.linkText(text)).click();
    };
    Angular2AppPage.prototype.login = function () {
        protractor_1.element(protractor_1.by.css("input[name='username']")).sendKeys('user');
        protractor_1.element(protractor_1.by.css("input[name='password']")).sendKeys('password');
        protractor_1.element(protractor_1.by.linkText("Submit")).click();
    };
    return Angular2AppPage;
}());
exports.Angular2AppPage = Angular2AppPage;
