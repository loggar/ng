"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var SpotifyService_1 = require("../../app/ts/services/SpotifyService");
var MusicTestHelpers_1 = require("../MusicTestHelpers");
describe('SearchComponent', function () {
    beforeEach(function () {
        MusicTestHelpers_1.configureMusicTests();
    });
    describe('initialization', function () {
        it("doesn't search for a track without a query", testing_1.fakeAsync(testing_1.inject([router_1.Router, SpotifyService_1.SpotifyService], function (router, mockSpotifyService) {
            var searchSpy = mockSpotifyService.spy('searchTrack');
            var fixture = MusicTestHelpers_1.createRoot(router, MusicTestHelpers_1.RootCmp);
            router.navigateByUrl('/search');
            MusicTestHelpers_1.advance(fixture);
            expect(searchSpy).not.toHaveBeenCalled();
        })));
        it("searches for a track if a query is provided", testing_1.fakeAsync(testing_1.inject([router_1.Router, SpotifyService_1.SpotifyService], function (router, mockSpotifyService) {
            var searchSpy = mockSpotifyService.spy('searchTrack');
            var fixture = MusicTestHelpers_1.createRoot(router, MusicTestHelpers_1.RootCmp);
            router.navigateByUrl('/search?query=cats');
            MusicTestHelpers_1.advance(fixture);
            expect(searchSpy).toHaveBeenCalled();
        })));
    });
    describe('submitting a search', function () {
        it('navigates to the Search route', testing_1.fakeAsync(testing_1.inject([router_1.Router, common_1.Location], function (router, location) {
            var fixture = MusicTestHelpers_1.createRoot(router, MusicTestHelpers_1.RootCmp);
            expect(location.path()).toEqual('/');
            router.navigateByUrl('/search');
            MusicTestHelpers_1.advance(fixture);
            var searchComponent = fixture.debugElement.children[1].componentInstance;
            var searchSpy = spyOn(searchComponent, 'search');
            searchComponent.submit('cats');
            MusicTestHelpers_1.advance(fixture);
            expect(location.path()).toEqual('/search?query=cats');
            expect(searchSpy).toHaveBeenCalled();
        })));
        it('can search with a button', testing_1.fakeAsync(testing_1.inject([router_1.Router, common_1.Location], function (router, location) {
            var fixture = MusicTestHelpers_1.createRoot(router, MusicTestHelpers_1.RootCmp);
            router.navigateByUrl('/search');
            MusicTestHelpers_1.advance(fixture);
            expect(location.path()).toEqual('/search');
            var compiled = fixture.debugElement.nativeElement;
            var searchComponent = fixture.debugElement.children[1].componentInstance;
            var searchSpy = spyOn(searchComponent, 'search');
            var input = compiled.querySelector('input');
            var button = compiled.querySelector('button');
            input.value = 'cats';
            button.click();
            MusicTestHelpers_1.advance(fixture);
            expect(location.path()).toEqual('/search?query=cats');
            expect(searchSpy).toHaveBeenCalled();
        })));
    });
    describe('renderResults', function () {
        it('displays a message when no results are found', testing_1.fakeAsync(testing_1.inject([router_1.Router, common_1.Location, SpotifyService_1.SpotifyService], function (router, location, mockSpotifyService) {
            var fixture = MusicTestHelpers_1.createRoot(router, MusicTestHelpers_1.RootCmp);
            router.navigateByUrl('/search');
            MusicTestHelpers_1.advance(fixture);
            mockSpotifyService.setResponse({ tracks: { items: [] } });
            var compiled = fixture.debugElement.nativeElement;
            var input = compiled.querySelector('input');
            var button = compiled.querySelector('button');
            input.value = 'cats';
            button.click();
            MusicTestHelpers_1.advance(fixture);
            expect(compiled.innerText)
                .toContain("No tracks were found with the term 'cats'");
        })));
        it('displays results', testing_1.fakeAsync(testing_1.inject([router_1.Router, common_1.Location, SpotifyService_1.SpotifyService], function (router, location, mockSpotifyService) {
            var fixture = MusicTestHelpers_1.createRoot(router, MusicTestHelpers_1.RootCmp);
            router.navigateByUrl('/search');
            MusicTestHelpers_1.advance(fixture);
            var response = {
                tracks: {
                    items: [
                        {
                            id: 1,
                            name: 'TRACK',
                            album: { id: 2, name: 'ALBUM', images: [{ url: 'IMAGE_1' }] },
                            artists: [{ id: 3, name: 'ARTIST' }]
                        }
                    ]
                }
            };
            mockSpotifyService.setResponse(response);
            var compiled = fixture.debugElement.nativeElement;
            var input = compiled.querySelector('input');
            var button = compiled.querySelector('button');
            input.value = 'cats';
            button.click();
            MusicTestHelpers_1.advance(fixture);
            expect(compiled.querySelector('img').src).toContain('IMAGE_1');
            // checks the artist, track and album information
            var links = compiled.querySelectorAll('a');
            expect(links.length).toEqual(3);
            expect(links[0].innerText).toEqual('ARTIST');
            expect(links[1].innerText).toEqual('TRACK');
            expect(links[2].innerText).toEqual('ALBUM');
        })));
    });
});
