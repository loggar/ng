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
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var MockResponse = /** @class */ (function (_super) {
    __extends(MockResponse, _super);
    function MockResponse(json) {
        var _this = _super.call(this, new http_1.ResponseOptions()) || this;
        _this._json = json;
        return _this;
    }
    MockResponse.prototype.json = function () {
        return this._json;
    };
    return MockResponse;
}(http_1.Response));
var TestHelper = /** @class */ (function () {
    function TestHelper() {
    }
    /** Gets a child DebugElement by tag name. */
    TestHelper.getChildByTagName = function (parent, tagName) {
        return parent.query(function (debugEl) { return debugEl.nativeElement.tagName.toLowerCase() == tagName; });
    };
    /**
     * Gets a child DebugElement by css selector.
     *
     * The child of DebugElement are other elements that are "known" to
     * Angular.
     */
    TestHelper.getChildrenBySelector = function (parent, selector) {
        var results = [];
        parent.queryAll(platform_browser_1.By.css(selector)).forEach(function (el) { return results.push(el); });
        parent.children.forEach(function (de) {
            TestHelper.getChildrenBySelector(de, selector).forEach(function (el) { return results.push(el); });
        });
        return results;
    };
    TestHelper.isPhantomJS = function () {
        return navigator && navigator.userAgent
            && navigator.userAgent.indexOf('PhantomJS') > -1;
    };
    TestHelper.mockJSONResponse = function (payload) {
        return new MockResponse(payload);
    };
    return TestHelper;
}());
exports.TestHelper = TestHelper;
var SpyObject = /** @class */ (function () {
    function SpyObject(type) {
        if (type === void 0) { type = null; }
        if (type) {
            for (var prop in type.prototype) {
                var m = null;
                try {
                    m = type.prototype[prop];
                }
                catch (e) {
                    // As we are creating spys for abstract classes,
                    // these classes might have getters that throw when they are accessed.
                    // As we are only auto creating spys for methods, this
                    // should not matter.
                }
                if (typeof m === 'function') {
                    this.spy(prop);
                }
            }
        }
    }
    // Noop so that SpyObject has the same interface as in Dart
    SpyObject.prototype.noSuchMethod = function (args) { };
    SpyObject.prototype.spy = function (name) {
        if (!this[name]) {
            this[name] = this._createGuinnessCompatibleSpy(name);
        }
        return this[name];
    };
    SpyObject.prototype.prop = function (name, value) { this[name] = value; };
    /** @internal */
    SpyObject.prototype._createGuinnessCompatibleSpy = function (name) {
        var newSpy = jasmine.createSpy(name);
        newSpy.andCallFake = newSpy.and.callFake;
        newSpy.andReturn = newSpy.and.returnValue;
        newSpy.reset = newSpy.calls.reset;
        // revisit return null here (previously needed for rtts_assert).
        newSpy.and.returnValue(null);
        return newSpy;
    };
    return SpyObject;
}());
exports.SpyObject = SpyObject;
