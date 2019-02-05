"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Message = /** @class */ (function () {
    function Message() {
    }
    Message.prototype.ngOnInit = function () {
        console.log('header', this.header);
    };
    __decorate([
        core_1.Input()
    ], Message.prototype, "header", void 0);
    Message = __decorate([
        core_1.Component({
            selector: '[message]',
            host: {
                'class': 'ui message'
            },
            template: "\n    <div class=\"header\">\n      {{ header }}\n    </div>\n    <p>\n      <ng-content></ng-content>\n    </p>\n  "
        })
    ], Message);
    return Message;
}());
exports.Message = Message;
var ContentProjectionSampleApp = /** @class */ (function () {
    function ContentProjectionSampleApp() {
    }
    ContentProjectionSampleApp = __decorate([
        core_1.Component({
            selector: 'content-projection-sample-app',
            template: "\n  <div message header=\"My Message\">\n    This is the content of the message\n  </div>\n  "
        })
    ], ContentProjectionSampleApp);
    return ContentProjectionSampleApp;
}());
exports.ContentProjectionSampleApp = ContentProjectionSampleApp;
