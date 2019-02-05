"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var app_po_1 = require("./app.po");
describe('ng-book Nested Routing Example App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.Angular2AppPage();
    });
    it('should make a basic request', function () {
        page.navigateTo();
        expect(page.getHeaderText()).toMatch("Router Sample");
        page.clickLink("Home");
        expect(page.getSubheaderText()).toMatch("Welcome!");
        page.clickLink("Products");
        expect(page.getSubheaderText()).toMatch("Products");
        page.clickLink("Main");
        expect(page.getSubheaderText()).toMatch("Products");
        page.clickLink("Interest");
        expect(page.getProductsAreaText()).toMatch("interest");
        page.clickLink("Sportify");
        expect(page.getProductsAreaText()).toMatch("sportify");
    });
});
