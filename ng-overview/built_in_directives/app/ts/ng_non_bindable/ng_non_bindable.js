"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var NgNonBindableSampleApp = /** @class */ (function () {
    function NgNonBindableSampleApp() {
        this.content = 'Some text';
    }
    NgNonBindableSampleApp = __decorate([
        core_1.Component({
            selector: 'ng-non-bindable-sample-app',
            template: "\n  <div class='ngNonBindableDemo'>\n    <span class=\"bordered\">{{ content }}</span>\n    <span class=\"pre\" ngNonBindable>\n      &larr; This is what {{ content }} rendered\n    </span>\n  </div>\n  "
        })
    ], NgNonBindableSampleApp);
    return NgNonBindableSampleApp;
}());
exports.NgNonBindableSampleApp = NgNonBindableSampleApp;
var NgNonBindableSampleAppModule = /** @class */ (function () {
    function NgNonBindableSampleAppModule() {
    }
    NgNonBindableSampleAppModule = __decorate([
        core_2.NgModule({
            declarations: [NgNonBindableSampleApp],
            exports: [NgNonBindableSampleApp],
            imports: [platform_browser_1.BrowserModule]
        })
    ], NgNonBindableSampleAppModule);
    return NgNonBindableSampleAppModule;
}());
exports.NgNonBindableSampleAppModule = NgNonBindableSampleAppModule;
