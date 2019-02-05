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
    Angular2AppPage.prototype.searchFor = function (text) {
        protractor_1.element(protractor_1.by.css("search input")).sendKeys(text);
        return protractor_1.element(protractor_1.by.buttonText("Search")).click();
    };
    Angular2AppPage.prototype.clickLinkText = function (text) {
        return protractor_1.element(protractor_1.by.linkText(text)).click();
    };
    Angular2AppPage.prototype.getTrackHeaderText = function () {
        return protractor_1.element(protractor_1.by.css("thetrack h1")).getText();
    };
    Angular2AppPage.prototype.getArtistHeaderText = function () {
        return protractor_1.element(protractor_1.by.css("artist h1")).getText();
    };
    Angular2AppPage.prototype.getAlbumHeaderText = function () {
        return protractor_1.element(protractor_1.by.css("album h1")).getText();
    };
    return Angular2AppPage;
}());
exports.Angular2AppPage = Angular2AppPage;
