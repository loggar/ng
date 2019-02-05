"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
describe('ng-book redux-chat Example App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.Angular2AppPage();
    });
    it('should load the page', function () {
        page.navigateTo();
        expect(page.unreadCount()).toMatch("3");
        page.clickThread(1);
        expect(page.unreadCount()).toMatch("2");
        page.clickThread(2);
        expect(page.unreadCount()).toMatch("1");
        page.clickThread(3);
        expect(page.unreadCount()).toMatch("0");
        page.sendMessage('3');
        expect(page.unreadCount()).toMatch("0");
        page.clickThread(0);
        // expect(page.unreadCount()).toMatch(`1`);
        expect(page.getConversationText(3)).toContain("I waited 3 seconds");
    });
});
