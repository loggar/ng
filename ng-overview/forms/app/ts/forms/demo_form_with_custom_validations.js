"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-string-literal */
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
/**
 * Our custom validator
 *
 * A validator:
 * - Takes a `Control` as it's input and
 * - Returns a `StringMap<string, boolean>` where the key is "error code" and
 *   the value is `true` if it fails
 */
function skuValidator(control) {
    if (!control.value.match(/^123/)) {
        return { invalidSku: true };
    }
}
var DemoFormWithCustomValidations = /** @class */ (function () {
    function DemoFormWithCustomValidations(fb) {
        this.myForm = fb.group({
            'sku': ['', forms_1.Validators.compose([
                    forms_1.Validators.required, skuValidator
                ])]
        });
        this.sku = this.myForm.controls['sku'];
    }
    DemoFormWithCustomValidations.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
    };
    DemoFormWithCustomValidations = __decorate([
        core_1.Component({
            selector: 'demo-form-with-custom-validations',
            template: "\n  <div class=\"ui raised segment\">\n    <h2 class=\"ui header\">Demo Form: with custom validations</h2>\n    <form [formGroup]=\"myForm\"\n          (ngSubmit)=\"onSubmit(myForm.value)\"\n          class=\"ui form\">\n\n      <div class=\"field\"\n          [class.error]=\"!sku.valid && sku.touched\">\n        <label for=\"skuInput\">SKU</label>\n        <input type=\"text\"\n               id=\"skuInput\"\n               placeholder=\"SKU\"\n               [formControl]=\"sku\">\n         <div *ngIf=\"!sku.valid\"\n           class=\"ui error message\">SKU is invalid</div>\n         <div *ngIf=\"sku.hasError('required')\"\n           class=\"ui error message\">SKU is required</div>\n         <div *ngIf=\"sku.hasError('invalidSku')\"\n           class=\"ui error message\">SKU must begin with <span>123</span></div>\n      </div>\n\n      <div *ngIf=\"!myForm.valid\"\n        class=\"ui error message\">Form is invalid</div>\n      <button type=\"submit\" class=\"ui button\">Submit</button>\n    </form>\n  </div>\n  "
        })
    ], DemoFormWithCustomValidations);
    return DemoFormWithCustomValidations;
}());
exports.DemoFormWithCustomValidations = DemoFormWithCustomValidations;
