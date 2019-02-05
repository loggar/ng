"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * MusicTestHelpers - this file helps configure boilerplate for setting up
 * routing testing for this app.
 *
 * See also: https://github.com/angular/angular/blame/9883e19e2e2839043557ae89740a8f6b299680d2/modules/@angular/router/test/integration.spec.ts#L11
 */
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var AlbumComponent_1 = require("../app/ts/components/AlbumComponent");
var ArtistComponent_1 = require("../app/ts/components/ArtistComponent");
var SearchComponent_1 = require("../app/ts/components/SearchComponent");
var TrackComponent_1 = require("../app/ts/components/TrackComponent");
var spotify_1 = require("./mocks/spotify");
var BlankCmp = /** @class */ (function () {
    function BlankCmp() {
    }
    BlankCmp = __decorate([
        core_1.Component({
            selector: 'blank-cmp',
            template: ""
        })
    ], BlankCmp);
    return BlankCmp;
}());
exports.BlankCmp = BlankCmp;
var RootCmp = /** @class */ (function () {
    function RootCmp() {
    }
    RootCmp = __decorate([
        core_1.Component({
            selector: 'root-cmp',
            template: "<router-outlet></router-outlet>"
        })
    ], RootCmp);
    return RootCmp;
}());
exports.RootCmp = RootCmp;
exports.routerConfig = [
    { path: '', component: BlankCmp },
    { path: 'search', component: SearchComponent_1.SearchComponent },
    { path: 'artists/:id', component: ArtistComponent_1.ArtistComponent },
    { path: 'tracks/:id', component: TrackComponent_1.TrackComponent },
    { path: 'albums/:id', component: AlbumComponent_1.AlbumComponent }
];
function advance(fixture) {
    testing_1.tick();
    fixture.detectChanges();
}
exports.advance = advance;
function createRoot(router, componentType) {
    var f = testing_1.TestBed.createComponent(componentType);
    advance(f);
    router.initialNavigation();
    advance(f);
    return f;
}
exports.createRoot = createRoot;
function configureMusicTests() {
    var mockSpotifyService = new spotify_1.MockSpotifyService();
    testing_1.TestBed.configureTestingModule({
        imports: [
            {
                ngModule: testing_2.RouterTestingModule,
                providers: [router_1.provideRoutes(exports.routerConfig)]
            },
            TestModule
        ],
        providers: [
            mockSpotifyService.getProviders(),
            {
                provide: router_1.ActivatedRoute,
                useFactory: function (r) { return r.routerState.root; }, deps: [router_1.Router]
            }
        ]
    });
}
exports.configureMusicTests = configureMusicTests;
var TestModule = /** @class */ (function () {
    function TestModule() {
    }
    TestModule = __decorate([
        core_1.NgModule({
            imports: [testing_2.RouterTestingModule, common_1.CommonModule],
            entryComponents: [
                BlankCmp,
                RootCmp,
                SearchComponent_1.SearchComponent,
                ArtistComponent_1.ArtistComponent,
                TrackComponent_1.TrackComponent,
                AlbumComponent_1.AlbumComponent
            ],
            exports: [
                BlankCmp,
                RootCmp,
                SearchComponent_1.SearchComponent,
                ArtistComponent_1.ArtistComponent,
                TrackComponent_1.TrackComponent,
                AlbumComponent_1.AlbumComponent
            ],
            declarations: [
                BlankCmp,
                RootCmp,
                SearchComponent_1.SearchComponent,
                ArtistComponent_1.ArtistComponent,
                TrackComponent_1.TrackComponent,
                AlbumComponent_1.AlbumComponent
            ]
        })
    ], TestModule);
    return TestModule;
}());
