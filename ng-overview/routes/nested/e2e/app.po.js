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
        return protractor_1.element(protractor_1.by.css("h1")).getText();
    };
    Angular2AppPage.prototype.getSubheaderText = function () {
        return protractor_1.element(protractor_1.by.css("h2")).getText();
    };
    Angular2AppPage.prototype.clickLink = function (text) {
        return protractor_1.element(protractor_1.by.linkText(text)).click();
    };
    Angular2AppPage.prototype.getProductsAreaText = function () {
        return protractor_1.element(protractor_1.by.css(".products-area")).getText();
    };
    return Angular2AppPage;
}());
exports.Angular2AppPage = Angular2AppPage;
