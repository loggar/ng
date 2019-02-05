"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./polyfills.ts");
require("zone.js/dist/long-stack-trace-zone");
require("zone.js/dist/proxy.js");
require("zone.js/dist/sync-test");
require("zone.js/dist/jasmine-patch");
require("zone.js/dist/async-test");
require("zone.js/dist/fake-async-test");
// Prevent Karma from running prematurely.
__karma__.loaded = function () { };
Promise.all([
    System.import('@angular/core/testing'),
    System.import('@angular/platform-browser-dynamic/testing')
])
    // First, initialize the Angular testing environment.
    .then(function (_a) {
    var testing = _a[0], testingBrowser = _a[1];
    testing.getTestBed().initTestEnvironment(testingBrowser.BrowserDynamicTestingModule, testingBrowser.platformBrowserDynamicTesting());
})
    // Then we find all the tests.
    .then(function () { return require.context('./', true, /\.spec\.ts/); })
    // And load the modules.
    .then(function (context) { return context.keys().map(context); })
    // Finally, start Karma to run the tests.
    .then(__karma__.start, __karma__.error);
