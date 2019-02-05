"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (op1, op2) {
        return op1 + op2;
    };
    Calculator.prototype.subtract = function (op1, op2) {
        return op1 - op2;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
