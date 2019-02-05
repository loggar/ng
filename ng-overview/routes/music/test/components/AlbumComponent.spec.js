"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var SpotifyService_1 = require("../../app/ts/services/SpotifyService");
var MusicTestHelpers_1 = require("../MusicTestHelpers");
describe('AlbumComponent', function () {
    beforeEach(function () {
        MusicTestHelpers_1.configureMusicTests();
    });
    describe('initialization', function () {
        it('retrieves the album', testing_1.fakeAsync(testing_1.inject([router_1.Router, SpotifyService_1.SpotifyService], function (router, mockSpotifyService) {
            var fixture = MusicTestHelpers_1.createRoot(router, MusicTestHelpers_1.RootCmp);
            router.navigateByUrl('/albums/1');
            MusicTestHelpers_1.advance(fixture);
            expect(mockSpotifyService.getAlbumSpy).toHaveBeenCalledWith('1');
        })));
    });
    describe('back', function () {
        it('returns to the previous location', testing_1.fakeAsync(testing_1.inject([router_1.Router, common_1.Location], function (router, location) {
            var fixture = MusicTestHelpers_1.createRoot(router, MusicTestHelpers_1.RootCmp);
            expect(location.path()).toEqual('/');
            router.navigateByUrl('/albums/1');
            MusicTestHelpers_1.advance(fixture);
            expect(location.path()).toEqual('/albums/1');
            var album = fixture.debugElement.children[1].componentInstance;
            album.back();
            MusicTestHelpers_1.advance(fixture);
            expect(location.path()).toEqual('/');
        })));
    });
    describe('renderAlbum', function () {
        it('renders album info', testing_1.fakeAsync(testing_1.inject([router_1.Router, SpotifyService_1.SpotifyService], function (router, mockSpotifyService) {
            var fixture = MusicTestHelpers_1.createRoot(router, MusicTestHelpers_1.RootCmp);
            var album = {
                name: 'ALBUM NAME',
                artists: [{ name: 'ARTIST NAME' }],
                images: [null, { url: 'IMAGE_2' }],
                tracks: {
                    items: [{ id: 1, name: 'TRACK 1' }, { id: 2, name: 'TRACK 2' }]
                }
            };
            mockSpotifyService.setResponse(album);
            router.navigateByUrl('/albums/1');
            MusicTestHelpers_1.advance(fixture);
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('h1').innerHTML).toContain('ALBUM NAME');
            expect(compiled.querySelector('h2').innerHTML).toContain('ARTIST NAME');
            var links = compiled.querySelectorAll('a');
            expect(links[0].innerText).toContain('TRACK 1');
            expect(links[1].innerText).toContain('TRACK 2');
        })));
    });
});
