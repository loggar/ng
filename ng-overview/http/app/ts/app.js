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
var http_1 = require("@angular/http");
/*
 * Components
 */
var SimpleHTTPComponent_1 = require("components/SimpleHTTPComponent");
var MoreHTTPRequests_1 = require("components/MoreHTTPRequests");
var YouTubeSearchComponent_1 = require("components/YouTubeSearchComponent");
/*
 * Injectables
 */
var YouTubeSearchComponent_2 = require("components/YouTubeSearchComponent");
/*
 * Webpack
 */
require('css/styles.css');
var HttpApp = /** @class */ (function () {
    function HttpApp() {
    }
    HttpApp = __decorate([
        core_1.Component({
            selector: 'http-app',
            template: "\n  <div class=\"container\">\n    <simple-http></simple-http>\n    <hr/>\n    <more-http></more-http>\n    <hr/>\n    <youtube-search></youtube-search>\n  </div>\n  "
        })
    ], HttpApp);
    return HttpApp;
}());
var HttpAppModule = /** @class */ (function () {
    function HttpAppModule() {
    }
    HttpAppModule = __decorate([
        core_2.NgModule({
            declarations: [
                HttpApp,
                SimpleHTTPComponent_1.SimpleHTTPComponent,
                MoreHTTPRequests_1.MoreHTTPRequests,
                YouTubeSearchComponent_1.YouTubeSearchComponent,
                YouTubeSearchComponent_1.SearchBox,
                YouTubeSearchComponent_1.SearchResultComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule // <--- right here
            ],
            bootstrap: [HttpApp],
            providers: [
                YouTubeSearchComponent_2.youTubeServiceInjectables
            ]
        })
    ], HttpAppModule);
    return HttpAppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(HttpAppModule)
    .catch(function (err) { return console.error(err); });
