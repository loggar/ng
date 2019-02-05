"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DemoFormSkuBuilder = /** @class */ (function () {
    function DemoFormSkuBuilder(fb) {
        this.myForm = fb.group({
            'sku': ['ABC123']
        });
    }
    DemoFormSkuBuilder.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
    };
    DemoFormSkuBuilder = __decorate([
        core_1.Component({
            selector: 'demo-form-sku-builder',
            template: "\n  <div class=\"ui raised segment\">\n    <h2 class=\"ui header\">Demo Form: Sku with Builder</h2>\n    <form [formGroup]=\"myForm\" \n          (ngSubmit)=\"onSubmit(myForm.value)\"\n          class=\"ui form\">\n\n      <div class=\"field\">\n        <label for=\"skuInput\">SKU</label>\n        <input type=\"text\" \n               id=\"skuInput\" \n               placeholder=\"SKU\"\n               [formControl]=\"myForm.controls['sku']\">\n      </div>\n\n    <button type=\"submit\" class=\"ui button\">Submit</button>\n    </form>\n  </div>\n  "
        })
    ], DemoFormSkuBuilder);
    return DemoFormSkuBuilder;
}());
exports.DemoFormSkuBuilder = DemoFormSkuBuilder;
