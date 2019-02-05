"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("./helper");
var SpotifyService_1 = require("../../app/ts/services/SpotifyService");
var MockSpotifyService = /** @class */ (function (_super) {
    __extends(MockSpotifyService, _super);
    function MockSpotifyService() {
        var _this = _super.call(this, SpotifyService_1.SpotifyService) || this;
        _this.fakeResponse = null;
        _this.getAlbumSpy = _this.spy('getAlbum').andReturn(_this);
        _this.getArtistSpy = _this.spy('getArtist').andReturn(_this);
        _this.getTrackSpy = _this.spy('getTrack').andReturn(_this);
        _this.searchTrackSpy = _this.spy('searchTrack').andReturn(_this);
        return _this;
    }
    MockSpotifyService.prototype.subscribe = function (callback) {
        callback(this.fakeResponse);
    };
    MockSpotifyService.prototype.setResponse = function (json) {
        this.fakeResponse = json;
    };
    MockSpotifyService.prototype.getProviders = function () {
        return [{ provide: SpotifyService_1.SpotifyService, useValue: this }];
    };
    return MockSpotifyService;
}(helper_1.SpyObject));
exports.MockSpotifyService = MockSpotifyService;
