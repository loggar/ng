"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/http/testing");
var http_1 = require("@angular/http");
var SpotifyService_1 = require("../../app/ts/services/SpotifyService");
describe('SpotifyService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                http_1.BaseRequestOptions,
                testing_2.MockBackend,
                SpotifyService_1.SpotifyService,
                { provide: http_1.Http,
                    useFactory: function (backend, defaultOptions) {
                        return new http_1.Http(backend, defaultOptions);
                    }, deps: [testing_2.MockBackend, http_1.BaseRequestOptions] },
            ]
        });
    });
    // sets up an expectation that the correct URL will being requested
    function expectURL(backend, url) {
        backend.connections.subscribe(function (c) {
            expect(c.request.url).toBe(url);
            var response = new http_1.ResponseOptions({ body: '{"name": "felipe"}' });
            c.mockRespond(new http_1.Response(response));
        });
    }
    describe('getTrack', function () {
        it('retrieves using the track ID', testing_1.inject([SpotifyService_1.SpotifyService, testing_2.MockBackend], testing_1.fakeAsync(function (svc, backend) {
            var res;
            expectURL(backend, 'https://api.spotify.com/v1/tracks/TRACK_ID');
            svc.getTrack('TRACK_ID').subscribe(function (_res) {
                res = _res;
            });
            testing_1.tick();
            expect(res.name).toBe('felipe');
        })));
    });
    describe('getArtist', function () {
        it('retrieves using the artist ID', testing_1.inject([SpotifyService_1.SpotifyService, testing_2.MockBackend], testing_1.fakeAsync(function (svc, backend) {
            var res;
            expectURL(backend, 'https://api.spotify.com/v1/artists/ARTIST_ID');
            svc.getArtist('ARTIST_ID').subscribe(function (_res) {
                res = _res;
            });
            testing_1.tick();
            expect(res.name).toBe('felipe');
        })));
    });
    describe('getAlbum', function () {
        it('retrieves using the album ID', testing_1.inject([SpotifyService_1.SpotifyService, testing_2.MockBackend], testing_1.fakeAsync(function (svc, backend) {
            var res;
            expectURL(backend, 'https://api.spotify.com/v1/albums/ALBUM_ID');
            svc.getAlbum('ALBUM_ID').subscribe(function (_res) {
                res = _res;
            });
            testing_1.tick();
            expect(res.name).toBe('felipe');
        })));
    });
    describe('searchTrack', function () {
        it('searches type and term', testing_1.inject([SpotifyService_1.SpotifyService, testing_2.MockBackend], testing_1.fakeAsync(function (svc, backend) {
            var res;
            expectURL(backend, 'https://api.spotify.com/v1/search?q=TERM&type=track');
            svc.searchTrack("TERM").subscribe(function (_res) {
                res = _res;
            });
            testing_1.tick();
            expect(res.name).toBe('felipe');
        })));
    });
});
