"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./typings/karma-read-json.d.ts" />
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/http/testing");
var http_1 = require("@angular/http");
var YouTubeSearchComponent_1 = require("../app/ts/components/YouTubeSearchComponent");
var response = {
    'items': [
        {
            'id': { 'videoId': 'VIDEO_ID' },
            'snippet': {
                'title': 'TITLE',
                'description': 'DESCRIPTION',
                'thumbnails': {
                    'high': { 'url': 'THUMBNAIL_URL' }
                }
            }
        }
    ]
};
describe('MoreHTTPRequests (after)', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                YouTubeSearchComponent_1.YouTubeService,
                http_1.BaseRequestOptions,
                testing_2.MockBackend,
                { provide: YouTubeSearchComponent_1.YOUTUBE_API_KEY, useValue: 'YOUTUBE_API_KEY' },
                { provide: YouTubeSearchComponent_1.YOUTUBE_API_URL, useValue: 'YOUTUBE_API_URL' },
                { provide: http_1.Http, useFactory: function (backend, defaultOptions) {
                        return new http_1.Http(backend, defaultOptions);
                    }, deps: [testing_2.MockBackend, http_1.BaseRequestOptions] }
            ]
        });
    });
    describe('search', function () {
        function search(term, response, callback) {
            return testing_1.inject([YouTubeSearchComponent_1.YouTubeService, testing_2.MockBackend], testing_1.fakeAsync(function (service, backend) {
                var req;
                var res;
                backend.connections.subscribe(function (c) {
                    req = c.request;
                    c.mockRespond(new http_1.Response({ body: response }));
                });
                service.search(term).subscribe(function (_res) {
                    res = _res;
                });
                testing_1.tick();
                callback(req, res);
            }));
        }
        it('parses YouTube video id', search('hey', response, function (req, res) {
            var video = res[0];
            expect(video.id).toEqual('VIDEO_ID');
        }));
        it('parses YouTube video title', search('hey', response, function (req, res) {
            var video = res[0];
            expect(video.title).toEqual('TITLE');
        }));
        it('parses YouTube video description', search('hey', response, function (req, res) {
            var video = res[0];
            expect(video.description).toEqual('DESCRIPTION');
        }));
        it('parses YouTube video thumbnail', search('hey', response, function (req, res) {
            var video = res[0];
            expect(video.description).toEqual('DESCRIPTION');
        }));
        it('sends the query', search('term', response, function (req, res) {
            expect(req.url).toContain('q=term');
        }));
        it('sends the API key', search('term', response, function (req, res) {
            expect(req.url).toContain('key=YOUTUBE_API_KEY');
        }));
        it('uses the provided YouTube URL', search('term', response, function (req, res) {
            expect(req.url).toMatch(/^YOUTUBE_API_URL\?/);
        }));
    });
});
