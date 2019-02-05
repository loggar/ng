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
var core_2 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
/*
 * Components
 */
var SearchComponent_1 = require("components/SearchComponent");
var ArtistComponent_1 = require("components/ArtistComponent");
var TrackComponent_1 = require("components/TrackComponent");
var AlbumComponent_1 = require("components/AlbumComponent");
/*
 * Services
 */
var SpotifyService_1 = require("services/SpotifyService");
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
            template: "\n  <router-outlet></router-outlet>\n  "
        })
    ], RoutesDemoApp);
    return RoutesDemoApp;
}());
var routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent_1.SearchComponent },
    { path: 'artists/:id', component: ArtistComponent_1.ArtistComponent },
    { path: 'tracks/:id', component: TrackComponent_1.TrackComponent },
    { path: 'albums/:id', component: AlbumComponent_1.AlbumComponent },
];
var RoutesDemoAppModule = /** @class */ (function () {
    function RoutesDemoAppModule() {
    }
    RoutesDemoAppModule = __decorate([
        core_2.NgModule({
            declarations: [
                RoutesDemoApp,
                SearchComponent_1.SearchComponent,
                ArtistComponent_1.ArtistComponent,
                TrackComponent_1.TrackComponent,
                AlbumComponent_1.AlbumComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(routes) // <-- routes
            ],
            bootstrap: [RoutesDemoApp],
            providers: [
                SpotifyService_1.SPOTIFY_PROVIDERS,
                { provide: common_1.APP_BASE_HREF, useValue: '/' },
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ]
        })
    ], RoutesDemoAppModule);
    return RoutesDemoAppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(RoutesDemoAppModule)
    .catch(function (err) { return console.error(err); });
