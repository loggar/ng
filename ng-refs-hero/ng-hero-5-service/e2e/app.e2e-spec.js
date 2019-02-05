"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
describe('ng-hero App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.NgHeroPage();
    });
    it('should display welcome message', function (done) {
        page.navigateTo();
        page.getParagraphText()
            .then(function (msg) { return expect(msg).toEqual('Welcome to app!!'); })
            .then(done, done.fail);
    });
});
