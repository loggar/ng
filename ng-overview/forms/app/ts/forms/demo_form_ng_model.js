"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var DemoFormNgModel = /** @class */ (function () {
    function DemoFormNgModel(fb) {
        this.myForm = fb.group({
            'productName': ['', forms_1.Validators.required]
        });
    }
    DemoFormNgModel.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
    };
    DemoFormNgModel = __decorate([
        core_1.Component({
            selector: 'demo-form-ng-model',
            template: "\n  <div class=\"ui raised segment\">\n    <h2 class=\"ui header\">Demo Form: with ng-model</h2>\n\n    <div class=\"ui info message\">\n      The product name is: {{productName}}\n    </div>\n\n    <form [formGroup]=\"myForm\"\n          (ngSubmit)=\"onSubmit(myForm.value)\"\n          class=\"ui form\">\n\n      <div class=\"field\">\n        <label for=\"productNameInput\">Product Name</label>\n        <input type=\"text\"\n               id=\"productNameInput\"\n               placeholder=\"Product Name\"\n               [formControl]=\"myForm.get('productName')\"\n               [(ngModel)]=\"productName\">\n      </div>\n\n      <div *ngIf=\"!myForm.valid\"\n        class=\"ui error message\">Form is invalid</div>\n      <button type=\"submit\" class=\"ui button\">Submit</button>\n    </form>\n\n  </div>\n  "
        })
    ], DemoFormNgModel);
    return DemoFormNgModel;
}());
exports.DemoFormNgModel = DemoFormNgModel;
