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
    Angular2AppPage.prototype.unreadCount = function () {
        return protractor_1.element(protractor_1.by.css('.badge')).getText();
    };
    Angular2AppPage.prototype.clickThread = function (i) {
        return protractor_1.element.all(protractor_1.by.css('chat-thread')).get(i).click();
    };
    Angular2AppPage.prototype.sendMessage = function (msg) {
        protractor_1.element(protractor_1.by.css('.chat-input')).sendKeys(msg);
        return protractor_1.element(protractor_1.by.buttonText('Send')).click();
    };
    Angular2AppPage.prototype.getConversationText = function (i) {
        return protractor_1.element.all(protractor_1.by.css('.conversation')).get(i).getText();
    };
    return Angular2AppPage;
}());
exports.Angular2AppPage = Angular2AppPage;
