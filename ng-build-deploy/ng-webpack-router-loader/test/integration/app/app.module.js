"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
/*
 * Platform and Environment providers/directives/pipes
 */
var app_routes_1 = require("./app.routes");
// App is our top level component
var app_component_1 = require("./app.component");
var home_1 = require("./home");
var about_1 = require("./about");
var no_content_1 = require("./no-content");
var x_large_1 = require("./home/x-large");
// Application wide providers
var APP_PROVIDERS = [];
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            declarations: [
                app_component_1.AppComponent,
                about_1.AboutComponent,
                home_1.HomeComponent,
                no_content_1.NoContentComponent,
                x_large_1.XLarge
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: true, preloadingStrategy: router_1.PreloadAllModules })
            ],
            providers: [
                APP_PROVIDERS
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
