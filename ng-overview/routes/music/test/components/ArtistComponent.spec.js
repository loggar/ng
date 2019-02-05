"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var SpotifyService_1 = require("../../app/ts/services/SpotifyService");
var MusicTestHelpers_1 = require("../MusicTestHelpers");
describe('ArtistComponent', function () {
    beforeEach(function () {
        MusicTestHelpers_1.configureMusicTests();
    });
    describe('initialization', function () {
        it('retrieves the artist', testing_1.fakeAsync(testing_1.inject([router_1.Router, SpotifyService_1.SpotifyService], function (router, mockSpotifyService) {
            var fixture = MusicTestHelpers_1.createRoot(router, MusicTestHelpers_1.RootCmp);
            router.navigateByUrl('/artists/2');
            MusicTestHelpers_1.advance(fixture);
            expect(mockSpotifyService.getArtistSpy).toHaveBeenCalledWith('2');
        })));
    });
    describe('back', function () {
        it('returns to the previous location', testing_1.fakeAsync(testing_1.inject([router_1.Router, common_1.Location], function (router, location) {
            var fixture = MusicTestHelpers_1.createRoot(router, MusicTestHelpers_1.RootCmp);
            expect(location.path()).toEqual('/');
            router.navigateByUrl('/artists/2');
            MusicTestHelpers_1.advance(fixture);
            expect(location.path()).toEqual('/artists/2');
            var artist = fixture.debugElement.children[1].componentInstance;
            artist.back();
            MusicTestHelpers_1.advance(fixture);
            expect(location.path()).toEqual('/');
        })));
    });
    describe('renderArtist', function () {
        it('renders album info', testing_1.fakeAsync(testing_1.inject([router_1.Router, SpotifyService_1.SpotifyService], function (router, mockSpotifyService) {
            var fixture = MusicTestHelpers_1.createRoot(router, MusicTestHelpers_1.RootCmp);
            var artist = { name: 'ARTIST NAME', images: [{ url: 'IMAGE_1' }] };
            mockSpotifyService.setResponse(artist);
            router.navigateByUrl('/artists/2');
            MusicTestHelpers_1.advance(fixture);
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('h1').innerHTML).toContain('ARTIST NAME');
            expect(compiled.querySelector('img').src).toContain('IMAGE_1');
        })));
    });
});
