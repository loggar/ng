"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
describe('ng-book HTTP Example App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.Angular2AppPage();
    });
    it('should make a basic request', function () {
        page.navigateTo();
        expect(page.getResultsText('simple-http')).toEqual("");
        page.pushButton('Make Request');
        expect(page.getResultsText('simple-http')).toMatch("userId");
    });
    it('should make more requests', function () {
        page.navigateTo();
        expect(page.getResultsText('more-http')).toEqual("");
        page.pushButton('Make Post');
        expect(page.getResultsText('more-http')).toMatch("id");
        page.pushButton('Make Delete');
        expect(page.getResultsText('more-http')).toMatch("{}");
        page.pushButton('Make Headers');
        expect(page.getResultsText('more-http')).toMatch("body");
    });
    it('should search Youtube', function () {
        page.navigateTo();
        page.search('cats');
        expect(page.getSearchText()).toMatch("Funny Cats");
    });
});
