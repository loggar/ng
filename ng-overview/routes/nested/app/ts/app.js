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
var core_2 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
/*
 * Components
 */
var HomeComponent_1 = require("components/HomeComponent");
var ProductsComponent_1 = require("components/ProductsComponent");
/*
 * Webpack
 */
require('css/styles.css');
var RoutesDemoApp = /** @class */ (function () {
    function RoutesDemoApp(router) {
        this.router = router;
    }
    RoutesDemoApp = __decorate([
        core_1.Component({
            selector: 'router-app',
            template: "\n  <div class=\"page-header\">\n    <div class=\"container\">\n      <h1>Router Sample</h1>\n      <div class=\"navLinks\">\n        <a [routerLink]=\"['/home']\">Home</a>\n        <a [routerLink]=\"['/products']\">Products</a>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"content\">\n    <div class=\"container\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  "
        })
    ], RoutesDemoApp);
    return RoutesDemoApp;
}());
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent_1.HomeComponent },
    { path: 'products', component: ProductsComponent_1.ProductsComponent, children: ProductsComponent_1.routes }
];
var RoutesDemoAppModule = /** @class */ (function () {
    function RoutesDemoAppModule() {
    }
    RoutesDemoAppModule = __decorate([
        core_2.NgModule({
            declarations: [
                RoutesDemoApp,
                HomeComponent_1.HomeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes),
                ProductsComponent_1.ProductsComponentModule
            ],
            bootstrap: [RoutesDemoApp],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ]
        })
    ], RoutesDemoAppModule);
    return RoutesDemoAppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(RoutesDemoAppModule)
    .catch(function (err) { return console.error(err); });
