"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/http/testing");
var http_1 = require("@angular/http");
var MoreHTTPRequests_1 = require("../app/ts/components/MoreHTTPRequests");
describe('MoreHTTPRequests', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [],
            declarations: [MoreHTTPRequests_1.MoreHTTPRequests],
            providers: [
                http_1.BaseRequestOptions,
                testing_2.MockBackend,
                { provide: http_1.Http,
                    useFactory: function (backend, defaultOptions) {
                        return new http_1.Http(backend, defaultOptions);
                    },
                    deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                },
            ]
        });
    });
    it('performs a POST', testing_1.async(testing_1.inject([testing_2.MockBackend], function (backend) {
        var fixture = testing_1.TestBed.createComponent(MoreHTTPRequests_1.MoreHTTPRequests);
        var comp = fixture.debugElement.componentInstance;
        backend.connections.subscribe(function (c) {
            expect(c.request.url)
                .toBe('http://jsonplaceholder.typicode.com/posts');
            expect(c.request.method).toBe(http_1.RequestMethod.Post);
            c.mockRespond(new http_1.Response({ body: '{"response": "OK"}' }));
        });
        comp.makePost();
        expect(comp.data).toEqual({ 'response': 'OK' });
    })));
    it('performs a DELETE', testing_1.async(testing_1.inject([testing_2.MockBackend], function (backend) {
        var fixture = testing_1.TestBed.createComponent(MoreHTTPRequests_1.MoreHTTPRequests);
        var comp = fixture.debugElement.componentInstance;
        backend.connections.subscribe(function (c) {
            expect(c.request.url)
                .toBe('http://jsonplaceholder.typicode.com/posts/1');
            expect(c.request.method).toBe(http_1.RequestMethod.Delete);
            c.mockRespond(new http_1.Response({ body: '{"response": "OK"}' }));
        });
        comp.makeDelete();
        expect(comp.data).toEqual({ 'response': 'OK' });
    })));
    it('sends correct headers', testing_1.async(testing_1.inject([testing_2.MockBackend], function (backend) {
        var fixture = testing_1.TestBed.createComponent(MoreHTTPRequests_1.MoreHTTPRequests);
        var comp = fixture.debugElement.componentInstance;
        backend.connections.subscribe(function (c) {
            expect(c.request.url)
                .toBe('http://jsonplaceholder.typicode.com/posts/1');
            expect(c.request.headers.has('X-API-TOKEN')).toBeTruthy();
            expect(c.request.headers.get('X-API-TOKEN')).toEqual('ng-book');
            c.mockRespond(new http_1.Response({ body: '{"response": "OK"}' }));
        });
        comp.makeHeaders();
        expect(comp.data).toEqual({ 'response': 'OK' });
    })));
});
