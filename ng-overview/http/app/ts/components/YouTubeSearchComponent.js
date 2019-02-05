"use strict";
/**
 * YouTubeSearchComponent is a tiny app that will autocomplete search YouTube.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
/*
  This API key may or may not work for you. Your best bet is to issue your own
  API key by following these instructions:
  https://developers.google.com/youtube/registering_an_application#Create_API_Keys

  Here I've used a **server key** and make sure you enable YouTube.

  Note that if you do use this API key, it will only work if the URL in
  your browser is "localhost"
*/
exports.YOUTUBE_API_KEY = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
exports.YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';
var loadingGif = (window.__karma__) ? '' : require('images/loading.gif');
var SearchResult = /** @class */ (function () {
    function SearchResult(obj) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.thumbnailUrl = obj && obj.thumbnailUrl || null;
        this.videoUrl = obj && obj.videoUrl ||
            "https://www.youtube.com/watch?v=" + this.id;
    }
    return SearchResult;
}());
/**
 * YouTubeService connects to the YouTube API
 * See: * https://developers.google.com/youtube/v3/docs/search/list
 */
var YouTubeService = /** @class */ (function () {
    function YouTubeService(http, apiKey, apiUrl) {
        this.http = http;
        this.apiKey = apiKey;
        this.apiUrl = apiUrl;
    }
    YouTubeService.prototype.search = function (query) {
        var params = [
            "q=" + query,
            "key=" + this.apiKey,
            "part=snippet",
            "type=video",
            "maxResults=10"
        ].join('&');
        var queryUrl = this.apiUrl + "?" + params;
        return this.http.get(queryUrl)
            .map(function (response) {
            return response.json().items.map(function (item) {
                // console.log("raw item", item); // uncomment if you want to debug
                return new SearchResult({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnailUrl: item.snippet.thumbnails.high.url
                });
            });
        });
    };
    YouTubeService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(exports.YOUTUBE_API_KEY)),
        __param(2, core_1.Inject(exports.YOUTUBE_API_URL))
    ], YouTubeService);
    return YouTubeService;
}());
exports.YouTubeService = YouTubeService;
exports.youTubeServiceInjectables = [
    { provide: YouTubeService, useClass: YouTubeService },
    { provide: exports.YOUTUBE_API_KEY, useValue: exports.YOUTUBE_API_KEY },
    { provide: exports.YOUTUBE_API_URL, useValue: exports.YOUTUBE_API_URL }
];
/**
 * SearchBox displays the search box and emits events based on the results
 */
var SearchBox = /** @class */ (function () {
    function SearchBox(youtube, el) {
        this.youtube = youtube;
        this.el = el;
        this.loading = new core_1.EventEmitter();
        this.results = new core_1.EventEmitter();
    }
    SearchBox.prototype.ngOnInit = function () {
        var _this = this;
        // convert the `keyup` event into an observable stream
        rxjs_1.Observable.fromEvent(this.el.nativeElement, 'keyup')
            .map(function (e) { return e.target.value; }) // extract the value of the input
            .filter(function (text) { return text.length > 1; }) // filter out if empty
            .debounceTime(250) // only once every 250ms
            .do(function () { return _this.loading.next(true); }) // enable loading
            // search, discarding old events if new input comes in
            .map(function (query) { return _this.youtube.search(query); })
            .switch()
            // act on the return of the search
            .subscribe(function (results) {
            _this.loading.next(false);
            _this.results.next(results);
        }, function (err) {
            console.log(err);
            _this.loading.next(false);
        }, function () {
            _this.loading.next(false);
        });
    };
    SearchBox = __decorate([
        core_1.Component({
            outputs: ['loading', 'results'],
            selector: 'search-box',
            template: "\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" autofocus>\n  "
        })
    ], SearchBox);
    return SearchBox;
}());
exports.SearchBox = SearchBox;
var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent() {
    }
    SearchResultComponent = __decorate([
        core_1.Component({
            inputs: ['result'],
            selector: 'search-result',
            template: "\n   <div class=\"col-sm-6 col-md-3\">\n      <div class=\"thumbnail\">\n        <img src=\"{{result.thumbnailUrl}}\">\n        <div class=\"caption\">\n          <h3>{{result.title}}</h3>\n          <p>{{result.description}}</p>\n          <p><a href=\"{{result.videoUrl}}\"\n                class=\"btn btn-default\" role=\"button\">\n                Watch</a></p>\n        </div>\n      </div>\n    </div>\n  "
        })
    ], SearchResultComponent);
    return SearchResultComponent;
}());
exports.SearchResultComponent = SearchResultComponent;
var YouTubeSearchComponent = /** @class */ (function () {
    function YouTubeSearchComponent() {
    }
    YouTubeSearchComponent.prototype.updateResults = function (results) {
        this.results = results;
        // console.log("results:", this.results); // uncomment to take a look
    };
    YouTubeSearchComponent = __decorate([
        core_1.Component({
            selector: 'youtube-search',
            template: "\n  <div class='container'>\n      <div class=\"page-header\">\n        <h1>YouTube Search\n          <img\n            style=\"float: right;\"\n            *ngIf=\"loading\"\n            src='" + loadingGif + "' />\n        </h1>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-group input-group-lg col-md-12\">\n          <search-box\n             (loading)=\"loading = $event\"\n             (results)=\"updateResults($event)\"\n              ></search-box>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <search-result\n          *ngFor=\"let result of results\"\n          [result]=\"result\">\n        </search-result>\n      </div>\n  </div>\n  "
        })
    ], YouTubeSearchComponent);
    return YouTubeSearchComponent;
}());
exports.YouTubeSearchComponent = YouTubeSearchComponent;
