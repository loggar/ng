"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Store = /** @class */ (function () {
    function Store(reducer, initialState) {
        this.reducer = reducer;
        this._listeners = [];
        this._state = initialState;
    }
    Store.prototype.getState = function () {
        return this._state;
    };
    Store.prototype.dispatch = function (action) {
        this._state = this.reducer(this._state, action);
        this._listeners.forEach(function (listener) { return listener(); });
    };
    Store.prototype.subscribe = function (listener) {
        var _this = this;
        this._listeners.push(listener);
        return function () {
            _this._listeners = _this._listeners.filter(function (l) { return l !== listener; });
        };
    };
    return Store;
}());
exports.Store = Store;
