"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var app_po_1 = require("./app.po");
describe('ng-book Auth Routing Example App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.Angular2AppPage();
    });
    it('should make a basic request', function () {
        page.navigateTo();
        expect(page.getPageHeaderText()).toMatch("Router Sample");
        page.clickLink("Home");
        expect(page.getHeaderText()).toMatch("Welcome!");
        page.clickLink("About");
        expect(page.getHeaderText()).toMatch("About");
        page.clickLink("Contact Us");
        expect(page.getHeaderText()).toMatch("Contact Us");
        // try protected while logged out
        page.clickLink("Protected");
        expect(page.getHeaderText()).toMatch("Contact Us"); // didnt change
        page.clickLink("Home");
        page.login();
        page.clickLink("Protected");
        expect(page.getHeaderText()).toMatch("Protected content");
    });
});
