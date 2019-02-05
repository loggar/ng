"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Sample = /** @class */ (function () {
    function Sample() {
    }
    Sample = __decorate([
        core_1.Component({
            selector: 'sample',
            template: "\n  <div class=\"ui card\">\n    <div class=\"content\">\n      <a class=\"header\">Dr. Peter Venkman</a>\n      <div class=\"meta\">\n        <span class=\"date\">Joined in 1984</span>\n      </div>\n      <div class=\"description\">\n        Three former parapsychology professors\n        set up shop as a unique ghost removal\n        service.\n      </div>\n    </div>\n    <div class=\"extra content\">\n      <a>\n        <i class=\"user icon\"></i>\n        22 Friends\n      </a>\n    </div>\n  </div>\n  "
        })
    ], Sample);
    return Sample;
}());
var Popup = /** @class */ (function () {
    function Popup() {
    }
    Popup.prototype.ngOnInit = function () {
        console.log('message', this.message);
    };
    Popup.prototype.onClick = function () {
        alert(this.message);
    };
    __decorate([
        core_1.Input()
    ], Popup.prototype, "message", void 0);
    Popup = __decorate([
        core_1.Directive({
            selector: '[popup]',
            exportAs: 'popup',
            host: {
                '(click)': 'onClick()'
            }
        })
    ], Popup);
    return Popup;
}());
var HostSampleApp = /** @class */ (function () {
    function HostSampleApp() {
    }
    HostSampleApp = __decorate([
        core_1.Component({
            selector: 'host-sample-app',
            template: "\n  <div class=\"ui grid\">\n    <div class=\"two column row\">\n      <div class=\"column\">\n        <sample popup message=\"Clicked me!\" #p1=\"popup\"></sample>\n        <button (click)=\"p1.onClick()\" class=\"ui fluid button\">Trigger popup</button>\n      </div>\n\n      <div class=\"column\">\n        <sample popup message=\"Another click!\" #p2=\"popup\"></sample>\n        <button (click)=\"p2.onClick()\" class=\"ui fluid button\">Trigger popup</button>\n      </div>\n    </div>\n  </div>\n  "
        })
    ], HostSampleApp);
    return HostSampleApp;
}());
exports.HostSampleApp = HostSampleApp;
var HostSampleAppModule = /** @class */ (function () {
    function HostSampleAppModule() {
    }
    HostSampleAppModule = __decorate([
        core_1.NgModule({
            declarations: [
                HostSampleApp,
                Sample,
                Popup
            ],
            exports: [
                HostSampleApp
            ]
        })
    ], HostSampleAppModule);
    return HostSampleAppModule;
}());
exports.HostSampleAppModule = HostSampleAppModule;
