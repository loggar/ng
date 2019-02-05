"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent = __decorate([
        core_1.Component({
            selector: 'intro',
            template: "\n  <div class=\"intro\">\n    <p>\n    This project shows examples of Angular's built-in directives. \n    Click on the menu on the right to try out each example!\n    </p>\n\n    <p>\n    Many of the examples use console.log so make sure you have your\n    browser's console open to see the debugging messages. \n    </p>\n\n    <p>\n    -- The ng-book team\n    </p>\n  </div>\n  " // '
        })
    ], IntroComponent);
    return IntroComponent;
}());
exports.IntroComponent = IntroComponent;
