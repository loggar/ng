"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
describe('ng-book Built-in Directives App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.Angular2AppPage();
    });
    it('should load the page', function () {
        page.navigateTo();
        expect(page.getHeaderText()).toEqual("Angular 2 Built-in Directives");
        expect(page.getIntroText()).toContain("The ng-book team");
    });
    it('should have tabs', function () {
        page.navigateTo();
        page.clickTab('NgFor');
        page.clickTab('NgSwitch');
        page.clickTab('NgStyle');
        page.clickTab('NgClass');
        page.clickTab('NgNonBindable');
    });
});
