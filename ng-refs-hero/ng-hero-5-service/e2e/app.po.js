"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var NgHeroPage = /** @class */ (function () {
    function NgHeroPage() {
    }
    NgHeroPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    NgHeroPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return NgHeroPage;
}());
exports.NgHeroPage = NgHeroPage;
