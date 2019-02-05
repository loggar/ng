"use strict";
/*
 * Angular
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(spotify, router, route) {
        var _this = this;
        this.spotify = spotify;
        this.router = router;
        this.route = route;
        this.route
            .queryParams
            .subscribe(function (params) { _this.query = params['query'] || ''; });
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.search();
    };
    SearchComponent.prototype.submit = function (query) {
        var _this = this;
        this.router.navigate(['search'], { queryParams: { query: query } })
            .then(function (_) { return _this.search(); });
    };
    SearchComponent.prototype.search = function () {
        var _this = this;
        console.log('this.query', this.query);
        if (!this.query) {
            return;
        }
        this.spotify
            .searchTrack(this.query)
            .subscribe(function (res) { return _this.renderResults(res); });
    };
    SearchComponent.prototype.renderResults = function (res) {
        this.results = null;
        if (res && res.tracks && res.tracks.items) {
            this.results = res.tracks.items;
        }
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            template: "\n  <h1>Search</h1>\n\n  <p>\n    <input type=\"text\" #newquery\n      [value]=\"query\"\n      (keydown.enter)=\"submit(newquery.value)\">\n    <button (click)=\"submit(newquery.value)\">Search</button>\n  </p>\n\n  <div *ngIf=\"results\">\n    <div *ngIf=\"!results.length\">\n      No tracks were found with the term '{{ query }}'\n    </div>\n\n    <div *ngIf=\"results.length\">\n      <h1>Results</h1>\n\n      <div class=\"row\">\n        <div class=\"col-sm-6 col-md-4\" *ngFor=\"let t of results\">\n          <div class=\"thumbnail\">\n            <div class=\"content\">\n              <img src=\"{{ t.album.images[0].url }}\" class=\"img-responsive\">\n              <div class=\"caption\">\n                <h3>\n                  <a [routerLink]=\"['/artists', t.artists[0].id]\">\n                    {{ t.artists[0].name }}\n                  </a>\n                </h3>\n                <br>\n                <p>\n                  <a [routerLink]=\"['/tracks', t.id]\">\n                    {{ t.name }}\n                  </a>\n                </p>\n              </div>\n              <div class=\"attribution\">\n                <h4>\n                  <a [routerLink]=\"['/albums', t.album.id]\">\n                    {{ t.album.name }}\n                  </a>\n                </h4>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  "
        })
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
