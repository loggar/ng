"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Angular
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
/*
 * Components
 */
var MainComponent_1 = require("components/products/MainComponent");
var InterestComponent_1 = require("components/products/InterestComponent");
var SportifyComponent_1 = require("components/products/SportifyComponent");
var ByIdComponent_1 = require("components/products/ByIdComponent");
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    ProductsComponent.prototype.goToProduct = function (id) {
        this.router.navigate(['./', id], { relativeTo: this.route });
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'products',
            template: "\n  <h2>Products</h2>\n\n  <div class=\"navLinks\">\n    <a [routerLink]=\"['./main']\">Main</a> |\n    <a [routerLink]=\"['./interest']\">Interest</a> |\n    <a [routerLink]=\"['./sportify']\">Sportify</a> |\n    Enter id: <input #id size=\"6\">\n    <button (click)=\"goToProduct(id.value)\">Go</button>\n  </div>\n\n  <div class=\"products-area\">\n    <router-outlet></router-outlet>\n  </div>\n  "
        })
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
exports.routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent_1.MainComponent },
    { path: ':id', component: ByIdComponent_1.ByIdComponent },
    { path: 'interest', component: InterestComponent_1.InterestComponent },
    { path: 'sportify', component: SportifyComponent_1.SportifyComponent },
];
var ProductsComponentModule = /** @class */ (function () {
    function ProductsComponentModule() {
    }
    ProductsComponentModule = __decorate([
        core_1.NgModule({
            declarations: [
                ProductsComponent,
                MainComponent_1.MainComponent,
                InterestComponent_1.InterestComponent,
                SportifyComponent_1.SportifyComponent,
                ByIdComponent_1.ByIdComponent
            ],
            exports: [
                ProductsComponent,
                MainComponent_1.MainComponent,
                InterestComponent_1.InterestComponent,
                SportifyComponent_1.SportifyComponent,
                ByIdComponent_1.ByIdComponent
            ],
            imports: [router_1.RouterModule]
        })
    ], ProductsComponentModule);
    return ProductsComponentModule;
}());
exports.ProductsComponentModule = ProductsComponentModule;
