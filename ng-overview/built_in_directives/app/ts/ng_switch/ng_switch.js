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
var NgSwitchSampleApp = /** @class */ (function () {
    function NgSwitchSampleApp() {
        this.choice = 1;
    }
    NgSwitchSampleApp.prototype.nextChoice = function () {
        this.choice += 1;
        if (this.choice > 5) {
            this.choice = 1;
        }
    };
    NgSwitchSampleApp = __decorate([
        core_1.Component({
            selector: 'ng-switch-sample-app',
            template: "\n    <h4 class=\"ui horizontal divider header\">\n      Current choice is {{ choice }}\n    </h4>\n\n    <div class=\"ui raised segment\">\n      <ul [ngSwitch]=\"choice\">\n        <li *ngSwitchCase=\"1\">First choice</li>\n        <li *ngSwitchCase=\"2\">Second choice</li>\n        <li *ngSwitchCase=\"3\">Third choice</li>\n        <li *ngSwitchCase=\"4\">Fourth choice</li>\n        <li *ngSwitchCase=\"2\">Second choice, again</li>\n        <li *ngSwitchDefault>Default choice</li>\n      </ul>\n    </div>\n\n    <div style=\"margin-top: 20px;\">\n      <button class=\"ui primary button\" (click)=\"nextChoice()\">\n        Next choice\n      </button>\n    </div>\n  "
        })
    ], NgSwitchSampleApp);
    return NgSwitchSampleApp;
}());
exports.NgSwitchSampleApp = NgSwitchSampleApp;
var NgSwitchSampleAppModule = /** @class */ (function () {
    function NgSwitchSampleAppModule() {
    }
    NgSwitchSampleAppModule = __decorate([
        core_2.NgModule({
            declarations: [NgSwitchSampleApp],
            exports: [NgSwitchSampleApp],
            imports: [platform_browser_1.BrowserModule]
        })
    ], NgSwitchSampleAppModule);
    return NgSwitchSampleAppModule;
}());
exports.NgSwitchSampleAppModule = NgSwitchSampleAppModule;
