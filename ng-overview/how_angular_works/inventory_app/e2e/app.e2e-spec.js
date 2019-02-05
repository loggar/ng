"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
describe('angular2-inventory App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.Angular2AppPage();
    });
    it('should load the page', function () {
        page.navigateTo();
        expect(page.getHeaderText()).toEqual("Angular 2 Inventory App");
    });
    it('should have a blue jacket on the page', function () {
        page.navigateTo();
        expect(page.getItemName(1)).toEqual("Blue Jacket");
    });
});
