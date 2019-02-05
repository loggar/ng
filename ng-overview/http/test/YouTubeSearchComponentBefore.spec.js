"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/http/testing");
var http_1 = require("@angular/http");
var YouTubeSearchComponent_1 = require("../app/ts/components/YouTubeSearchComponent");
describe('MoreHTTPRequests (before)', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                YouTubeSearchComponent_1.YouTubeService,
                http_1.BaseRequestOptions,
                testing_2.MockBackend,
                { provide: YouTubeSearchComponent_1.YOUTUBE_API_KEY, useValue: 'YOUTUBE_API_KEY' },
                { provide: YouTubeSearchComponent_1.YOUTUBE_API_URL, useValue: 'YOUTUBE_API_URL' },
                { provide: http_1.Http,
                    useFactory: function (backend, defaultOptions) {
                        return new http_1.Http(backend, defaultOptions);
                    }, deps: [testing_2.MockBackend, http_1.BaseRequestOptions] }
            ]
        });
    });
    describe('search', function () {
        it('parses YouTube response', testing_1.inject([YouTubeSearchComponent_1.YouTubeService, testing_2.MockBackend], testing_1.fakeAsync(function (service, backend) {
            var res;
            backend.connections.subscribe(function (c) {
                c.mockRespond(new http_1.Response({
                    body: "\n            {\n              \"items\": [\n                {\n                  \"id\": { \"videoId\": \"VIDEO_ID\" },\n                  \"snippet\": {\n                    \"title\": \"TITLE\",\n                    \"description\": \"DESCRIPTION\",\n                    \"thumbnails\": {\n                      \"high\": { \"url\": \"THUMBNAIL_URL\" }\n                    }}}]}"
                }));
            });
            service.search('hey').subscribe(function (_res) {
                res = _res;
            });
            testing_1.tick();
            var video = res[0];
            expect(video.id).toEqual('VIDEO_ID');
            expect(video.title).toEqual('TITLE');
            expect(video.description).toEqual('DESCRIPTION');
            expect(video.thumbnailUrl).toEqual('THUMBNAIL_URL');
        })));
    });
});
