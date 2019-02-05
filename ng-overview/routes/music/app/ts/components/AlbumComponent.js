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
var AlbumComponent = /** @class */ (function () {
    function AlbumComponent(route, spotify, // <-- injected
    location) {
        var _this = this;
        this.route = route;
        this.spotify = spotify;
        this.location = location;
        route.params.subscribe(function (params) { _this.id = params['id']; });
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spotify
            .getAlbum(this.id)
            .subscribe(function (res) { return _this.renderAlbum(res); });
    };
    AlbumComponent.prototype.back = function () {
        this.location.back();
    };
    AlbumComponent.prototype.renderAlbum = function (res) {
        this.album = res;
    };
    AlbumComponent = __decorate([
        core_1.Component({
            selector: 'album',
            template: "\n  <div *ngIf=\"album\">\n    <h1>{{ album.name }}</h1>\n    <h2>{{ album.artists[0].name }}</h2>\n\n    <p>\n      <img src=\"{{ album.images[1].url }}\">\n    </p>\n\n    <h3>Tracks</h3>\n    <ol>\n      <li *ngFor=\"let t of album.tracks.items\">\n        <a [routerLink]=\"['/tracks', t.id]\">\n          {{ t.name }}\n        </a>\n      </li>\n    </ol>\n\n    <p><a href (click)=\"back()\">Back</a></p>\n  </div>\n  "
        })
    ], AlbumComponent);
    return AlbumComponent;
}());
exports.AlbumComponent = AlbumComponent;
