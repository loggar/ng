"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Loader_1 = require("../../src/Loader");
var WebpackMock = /** @class */ (function () {
    function WebpackMock(options, resourcePath, resolver) {
        this.options = options;
        this.resourcePath = resourcePath;
        this.resolver = resolver;
    }
    Object.defineProperty(WebpackMock.prototype, "query", {
        get: function () {
            var _this = this;
            var kvp = Object.keys(this.options)
                .map(function (k) { return k + "=" + _this.options[k]; })
                .join('&');
            if (kvp)
                return '?' + kvp;
            return '';
        },
        enumerable: true,
        configurable: true
    });
    WebpackMock.prototype.resolve = function (context, resourceUri, cb) {
        if (typeof this.resolver === 'function') {
            try {
                cb(null, this.resolver(context, resourceUri));
            }
            catch (err) {
                cb(err);
            }
        }
        else {
            cb(null, this.resolver || '');
        }
    };
    return WebpackMock;
}());
exports.WebpackMock = WebpackMock;
var WebpackMockFactory = /** @class */ (function () {
    function WebpackMockFactory() {
        this._meta = {
            options: {}
        };
    }
    WebpackMockFactory.prototype.options = function (options) {
        this._meta.options = options;
        return this;
    };
    // When going TS 2.1
    // setOption<T extends keyof RouterLoaderOptions>(key: T, value: RouterLoaderOptions[T]): this {
    WebpackMockFactory.prototype.setOption = function (key, value) {
        this._meta.options[key] = value;
        return this;
    };
    WebpackMockFactory.prototype.resourcePath = function (resourcePath) {
        this._meta.resourcePath = resourcePath;
        return this;
    };
    WebpackMockFactory.prototype.resolver = function (resolver) {
        this._meta.resolver = resolver;
        return this;
    };
    WebpackMockFactory.prototype.toWebpack = function () {
        return new WebpackMock(this._meta.options, this._meta.resourcePath, this._meta.resolver);
    };
    WebpackMockFactory.prototype.toLoader = function () {
        return new Loader_1.Loader(this.toWebpack());
    };
    return WebpackMockFactory;
}());
exports.WebpackMockFactory = WebpackMockFactory;
function wpFactory() {
    return new WebpackMockFactory();
}
exports.wpFactory = wpFactory;
