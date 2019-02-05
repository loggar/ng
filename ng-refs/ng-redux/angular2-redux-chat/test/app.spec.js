"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculator_1 = require("calculator");
describe('Hello', function () {
    it('should test', function () {
    });
    it('should add', function () {
        var c = new calculator_1.Calculator();
        expect(true).toBe(true);
        expect(c.add(1, 2)).toBe(3);
    });
});
