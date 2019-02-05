"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
describe('ng-book Basic Routing Example App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.Angular2AppPage();
    });
    it('should make a basic request', function () {
        page.navigateTo();
        page.clickLink("Home");
        expect(page.getHeaderText()).toMatch("Welcome!");
        page.clickLink("About");
        expect(page.getHeaderText()).toMatch("About");
        page.clickLink("Contact Us");
        expect(page.getHeaderText()).toMatch("Contact Us");
    });
});
