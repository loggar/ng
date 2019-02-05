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
var NgClassSampleApp = /** @class */ (function () {
    function NgClassSampleApp() {
        this.isBordered = true;
        this.classList = ['blue', 'round'];
        this.toggleBorder();
    }
    NgClassSampleApp.prototype.toggleBorder = function () {
        this.isBordered = !this.isBordered;
        this.classesObj = {
            bordered: this.isBordered
        };
    };
    NgClassSampleApp.prototype.toggleClass = function (cssClass) {
        var pos = this.classList.indexOf(cssClass);
        if (pos > -1) {
            this.classList.splice(pos, 1);
        }
        else {
            this.classList.push(cssClass);
        }
    };
    NgClassSampleApp = __decorate([
        core_1.Component({
            selector: 'style-sample-app',
            template: "\n<div class='ngClassDemo'>\n  <div [ngClass]=\"{bordered: false}\">This is never bordered</div>\n  <div [ngClass]=\"{bordered: true}\">This is always bordered</div>\n\n  <div [ngClass]=\"{bordered: isBordered}\">\n   Using object literal. Border {{ isBordered ? \"ON\" : \"OFF\" }}\n  </div>\n\n  <div [ngClass]=\"classesObj\">\n    Using object var. Border {{ classesObj.bordered ? \"ON\" : \"OFF\" }}\n  </div>\n\n  <button (click)=\"toggleBorder()\">Toggle</button>\n\n  <div class=\"selectors\">\n    <div>\n      <input type=\"checkbox\"\n             [checked]=\"classList.indexOf('blue') > -1\"\n             (click)=\"toggleClass('blue')\">\n      <span>Blue</span>\n    </div>\n\n    <div>\n      <input type=\"checkbox\"\n             [checked]=\"classList.indexOf('round') > -1\"\n             (click)=\"toggleClass('round')\">\n      <span>Round</span>\n    </div>\n  </div>\n\n  <div class=\"base\" [ngClass]=\"['blue', 'round']\">\n    This will always have a blue background and\n    round corners\n  </div>\n\n  <div class=\"base\" [ngClass]=\"classList\">\n    This is {{ classList.indexOf('blue') > -1 ? \"\" : \"NOT\" }} blue\n    and {{ classList.indexOf('round') > -1 ? \"\" : \"NOT\" }} round\n  </div>\n</div>\n  "
        })
    ], NgClassSampleApp);
    return NgClassSampleApp;
}());
exports.NgClassSampleApp = NgClassSampleApp;
var NgClassSampleAppModule = /** @class */ (function () {
    function NgClassSampleAppModule() {
    }
    NgClassSampleAppModule = __decorate([
        core_2.NgModule({
            declarations: [NgClassSampleApp],
            exports: [NgClassSampleApp],
            imports: [platform_browser_1.BrowserModule]
        })
    ], NgClassSampleAppModule);
    return NgClassSampleAppModule;
}());
exports.NgClassSampleAppModule = NgClassSampleAppModule;
