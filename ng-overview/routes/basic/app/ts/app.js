"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Angular Imports
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
/*
 * Components
 */
var HomeComponent_1 = require("components/HomeComponent");
var AboutComponent_1 = require("components/AboutComponent");
var ContactComponent_1 = require("components/ContactComponent");
/*
 * Webpack
 */
require('css/styles.css');
var RoutesDemoApp = /** @class */ (function () {
    function RoutesDemoApp() {
    }
    RoutesDemoApp = __decorate([
        core_1.Component({
            selector: 'router-app',
            template: "\n  <div>\n    <nav>\n      <a>Navigation:</a>\n      <ul>\n        <li><a [routerLink]=\"['home']\">Home</a></li>\n        <li><a [routerLink]=\"['about']\">About</a></li>\n        <li><a [routerLink]=\"['contact']\">Contact Us</a></li>\n      </ul>\n    </nav>\n\n    <router-outlet></router-outlet>\n  </div>\n  "
        })
    ], RoutesDemoApp);
    return RoutesDemoApp;
}());
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent_1.HomeComponent },
    { path: 'about', component: AboutComponent_1.AboutComponent },
    { path: 'contact', component: ContactComponent_1.ContactComponent },
    { path: 'contactus', redirectTo: 'contact' },
];
var RoutesDemoAppModule = /** @class */ (function () {
    function RoutesDemoAppModule() {
    }
    RoutesDemoAppModule = __decorate([
        core_1.NgModule({
            declarations: [
                RoutesDemoApp,
                HomeComponent_1.HomeComponent,
                AboutComponent_1.AboutComponent,
                ContactComponent_1.ContactComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes) // <-- routes
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
