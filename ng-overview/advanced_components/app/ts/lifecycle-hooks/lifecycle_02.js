"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var OnInitCmp = /** @class */ (function () {
    function OnInitCmp() {
    }
    OnInitCmp.prototype.ngOnInit = function () {
        console.log('On init');
    };
    OnInitCmp.prototype.ngOnDestroy = function () {
        console.log('On destroy');
    };
    OnInitCmp = __decorate([
        core_1.Component({
            selector: 'on-init',
            template: "\n  <div class=\"ui label\">\n    <i class=\"cubes icon\"></i> Init/Destroy\n  </div>\n  "
        })
    ], OnInitCmp);
    return OnInitCmp;
}());
var OnChangeCmp = /** @class */ (function () {
    function OnChangeCmp() {
    }
    OnChangeCmp.prototype.ngOnChanges = function (changes) {
        console.log('Changes', changes);
    };
    __decorate([
        core_1.Input('name')
    ], OnChangeCmp.prototype, "name", void 0);
    __decorate([
        core_1.Input('comment')
    ], OnChangeCmp.prototype, "comment", void 0);
    OnChangeCmp = __decorate([
        core_1.Component({
            selector: 'on-change',
            template: "\n  <div class=\"ui comments\">\n    <div class=\"comment\">\n      <a class=\"avatar\">\n        <img src=\"app/images/avatars/matt.jpg\">\n      </a>\n      <div class=\"content\">\n        <a class=\"author\">{{name}}</a>\n        <div class=\"text\">\n          {{comment}}\n        </div>\n      </div>\n    </div>\n  </div>\n  "
        })
    ], OnChangeCmp);
    return OnChangeCmp;
}());
var LifecycleSampleApp2 = /** @class */ (function () {
    function LifecycleSampleApp2() {
        this.display = true;
        this.name = 'Felipe Coury';
        this.comment = 'I am learning so much!';
    }
    LifecycleSampleApp2.prototype.setValues = function (namefld, commentfld) {
        this.name = namefld.value;
        this.comment = commentfld.value;
    };
    LifecycleSampleApp2.prototype.toggle = function () {
        this.display = !this.display;
    };
    LifecycleSampleApp2 = __decorate([
        core_1.Component({
            selector: 'lifecycle-sample-app',
            template: "\n  <h4 class=\"ui horizontal divider header\">\n    OnInit and OnDestroy\n  </h4>\n\n  <button class=\"ui primary button\" (click)=\"toggle()\">\n    Toggle\n  </button>\n  <on-init *ngIf=\"display\"></on-init>\n\n  <h4 class=\"ui horizontal divider header\">\n    OnChange\n  </h4>\n\n  <div class=\"ui form\">\n    <div class=\"field\">\n      <label>Name</label>\n      <input type=\"text\" #namefld value=\"{{name}}\"\n             (keyup)=\"setValues(namefld, commentfld)\">\n    </div>\n\n    <div class=\"field\">\n      <label>Comment</label>\n      <textarea (keyup)=\"setValues(namefld, commentfld)\"\n                rows=\"2\" #commentfld>{{comment}}</textarea>\n    </div>\n  </div>\n\n  <on-change [name]=\"name\" [comment]=\"comment\"></on-change>\n  "
        })
    ], LifecycleSampleApp2);
    return LifecycleSampleApp2;
}());
exports.LifecycleSampleApp2 = LifecycleSampleApp2;
var LifecycleSampleApp2Module = /** @class */ (function () {
    function LifecycleSampleApp2Module() {
    }
    LifecycleSampleApp2Module = __decorate([
        core_1.NgModule({
            declarations: [
                LifecycleSampleApp2,
                OnInitCmp,
                OnChangeCmp
            ],
            imports: [common_1.CommonModule],
            exports: [LifecycleSampleApp2]
        })
    ], LifecycleSampleApp2Module);
    return LifecycleSampleApp2Module;
}());
exports.LifecycleSampleApp2Module = LifecycleSampleApp2Module;
