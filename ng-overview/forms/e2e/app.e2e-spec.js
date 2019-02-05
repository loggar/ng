"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
describe('ng-book Forms Example App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.Angular2AppPage();
    });
    it('should load the page', function () {
        page.navigateTo();
        expect(page.getHeaderText()).toEqual("Angular 2 Forms Example");
        expect(page.getCardHeaderText(0)).toContain("Demo Form: with ng-model");
    });
});
