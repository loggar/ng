"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
describe('ng-book HTTP Example App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.Angular2AppPage();
    });
    it('should load the page', function () {
        page.navigateTo();
        expect(page.getHeaderText()).toEqual("Angular 2 Advanced Components");
        expect(page.getIntroText()).toContain("The ng-book team");
    });
    it('should have tabs', function () {
        page.navigateTo();
        page.clickTab('Styling');
        page.clickTab('Modifying the Host (Step 1)');
        page.clickTab('Modifying the Host (Step 2)');
        page.clickTab('Modifying the Host (Step 3)');
        page.clickTab('Modifying the Host (Step 4)');
        page.clickTab('Modifying the Host');
        page.clickTab('Tabs - Component Querying');
        page.clickTab('Lifecycle 1 - OnInit / OnDestroy');
        page.clickTab('Lifecycle 2 - OnChanges');
        page.clickTab('Lifecycle 3 - Differs');
        page.clickTab('Lifecycle 4 - Full');
        page.clickTab('ngBookFor');
        page.clickTab('ngBookIf');
        page.clickTab('Content Projection');
        page.clickTab('Change Detection - OnPush');
        page.clickTab('Change Detection - Observables');
    });
});
