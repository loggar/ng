"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var SpotifyService_1 = require("../../app/ts/services/SpotifyService");
var MusicTestHelpers_1 = require("../MusicTestHelpers");
describe("TrackComponent", function () {
    beforeEach(function () {
        MusicTestHelpers_1.configureMusicTests();
    });
    describe('initialization', function () {
        it('retrieves the track', testing_1.fakeAsync(testing_1.inject([router_1.Router, SpotifyService_1.SpotifyService], function (router, mockSpotifyService) {
            var fixture = MusicTestHelpers_1.createRoot(router, MusicTestHelpers_1.RootCmp);
            MusicTestHelpers_1.advance(fixture);
            router.navigateByUrl('/tracks/1');
            MusicTestHelpers_1.advance(fixture);
            expect(mockSpotifyService.getTrackSpy).toHaveBeenCalledWith('1');
        })));
    });
    describe('back', function () {
        it('returns to the previous location', testing_1.fakeAsync(testing_1.inject([router_1.Router, common_1.Location], function (router, location) {
            var fixture = MusicTestHelpers_1.createRoot(router, MusicTestHelpers_1.RootCmp);
            expect(location.path()).toEqual('/');
            router.navigateByUrl('/tracks/1');
            MusicTestHelpers_1.advance(fixture);
            expect(location.path()).toEqual('/tracks/1');
            var album = fixture.debugElement.children[1].componentInstance;
            album.back();
            MusicTestHelpers_1.advance(fixture);
            expect(location.path()).toEqual('/');
        })));
    });
    describe('renderTrack', function () {
        it('renders track info', testing_1.fakeAsync(testing_1.inject([router_1.Router, SpotifyService_1.SpotifyService], function (router, mockSpotifyService) {
            var fixture = MusicTestHelpers_1.createRoot(router, MusicTestHelpers_1.RootCmp);
            var response = {
                name: 'TRACK NAME',
                album: { images: [{ url: 'IMAGE_0.png' }, { url: 'IMAGE_1.png' }] }
            };
            mockSpotifyService.setResponse(response);
            router.navigateByUrl('/tracks/1');
            MusicTestHelpers_1.advance(fixture);
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('h1').innerText).toContain('TRACK NAME');
        })));
    });
});
