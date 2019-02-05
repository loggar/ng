"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ModuleClass = /** @class */ (function () {
    function ModuleClass() {
    }
    ModuleClass.prototype.format = function () {
        return this.id + ':' + this.name;
    };
    return ModuleClass;
}());
exports.ModuleClass = ModuleClass;
