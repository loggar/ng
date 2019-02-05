"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
var protractor_1 = require("protractor");
describe('ng-book Hybrid Example App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.Angular2AppPage();
    });
    it('should load the page', function () {
        protractor_1.browser.ignoreSynchronization = true;
        page.navigateTo();
        expect(page.getHeaderText()).toMatch("Interest");
        page.clickNav('Add');
        page.submitForm();
        // eventually we'll replace this with an expected condition
        protractor_1.browser.sleep(10000).then(function () {
            expect(page.thumbnailText(0)).toMatch("Steampunk Cat");
        });
    });
});
