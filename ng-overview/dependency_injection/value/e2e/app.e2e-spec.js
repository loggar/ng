"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
var protractor_1 = require("protractor");
describe('ng-book Value Dependency Injection Example App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.Angular2AppPage();
    });
    it('should make a basic request', function () {
        page.navigateTo();
        expect(page.getHeaderText()).toEqual("Dependency Injection");
        page.clickButton("Invoke API");
        protractor_1.browser.sleep(0);
        protractor_1.browser.manage().logs().get('browser').then(function (browserLog) {
            var logs = browserLog.map(function (e) { return e.message; }).join(' ');
            expect(logs).toMatch('Calling');
        });
    });
});
