"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
describe('ng-book Routes Music App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.Angular2AppPage();
    });
    it('should make a basic request', function () {
        page.navigateTo();
        expect(page.getHeaderText()).toMatch("Sportify");
        page.searchFor("Miles Davis Kind of Blue");
        // track
        page.clickLinkText("So What");
        expect(page.getTrackHeaderText()).toMatch("So What");
        page.clickLinkText("Back");
        // artist
        page.clickLinkText("Miles Davis");
        expect(page.getArtistHeaderText()).toMatch("Miles Davis");
        page.clickLinkText("Back");
        // album 
        page.clickLinkText("Kind Of Blue");
        expect(page.getAlbumHeaderText()).toMatch("Kind Of Blue");
        page.clickLinkText("Back");
    });
});
