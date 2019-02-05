"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Utility functions for our browser tests
 */
function createEvent(eventType) {
    var evt = document.createEvent('Event');
    evt.initEvent(eventType, true, true);
    return evt;
}
exports.createEvent = createEvent;
function dispatchEvent(element, eventType) {
    element.dispatchEvent(createEvent(eventType));
}
exports.dispatchEvent = dispatchEvent;
var ConsoleSpy = /** @class */ (function () {
    function ConsoleSpy() {
        this.logs = [];
    }
    ConsoleSpy.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.logs.push(args.join(' '));
    };
    ConsoleSpy.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.log.apply(this, args);
    };
    return ConsoleSpy;
}());
exports.ConsoleSpy = ConsoleSpy;
