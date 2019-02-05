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
var Popup = /** @class */ (function () {
    function Popup(_elementRef) {
        console.log(_elementRef);
    }
    Popup.prototype.displayMessage = function () {
        alert(this.message);
    };
    __decorate([
        core_2.Input()
    ], Popup.prototype, "message", void 0);
    Popup = __decorate([
        core_2.Directive({
            selector: '[popup]',
            exportAs: 'popup',
            host: {
                '(click)': 'displayMessage()'
            }
        })
    ], Popup);
    return Popup;
}());
var HostSampleApp4 = /** @class */ (function () {
    function HostSampleApp4() {
    }
    HostSampleApp4 = __decorate([
        core_2.Component({
            selector: 'host-sample-app',
            template: "\n  <div class=\"ui message\" popup #popup1=\"popup\"\n       message=\"Clicked the message\">\n    <div class=\"header\">\n      Learning Directives\n    </div>\n\n    <p>\n      This should use our Popup diretive\n    </p>\n  </div>\n\n  <i class=\"alarm icon\" popup #p2=\"popup\"\n     message=\"Clicked the alarm icon\"></i>\n\n  <div style=\"margin-top: 20px;\">\n    <button (click)=\"popup1.displayMessage()\" class=\"ui button\">\n      Display popup for message element\n    </button>\n\n    <button (click)=\"p2.displayMessage()\" class=\"ui button\">\n      Display popup for alarm icon\n    </button>\n  </div>\n  "
        })
    ], HostSampleApp4);
    return HostSampleApp4;
}());
exports.HostSampleApp4 = HostSampleApp4;
var HostSampleApp4Module = /** @class */ (function () {
    function HostSampleApp4Module() {
    }
    HostSampleApp4Module = __decorate([
        core_1.NgModule({
            declarations: [
                HostSampleApp4,
                Popup
            ],
            exports: [HostSampleApp4]
        })
    ], HostSampleApp4Module);
    return HostSampleApp4Module;
}());
exports.HostSampleApp4Module = HostSampleApp4Module;
