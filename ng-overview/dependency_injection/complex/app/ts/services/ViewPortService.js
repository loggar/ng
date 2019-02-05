"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LargeService_1 = require("./LargeService");
var SmallService_1 = require("./SmallService");
var ViewPortService = /** @class */ (function () {
    function ViewPortService() {
    }
    ViewPortService.prototype.determineService = function () {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (w < 800) {
            return new SmallService_1.SmallService();
        }
        return new LargeService_1.LargeService();
    };
    return ViewPortService;
}());
exports.ViewPortService = ViewPortService;
