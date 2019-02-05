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
/// <reference path="../../typings/main.d.ts"/>
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/scan");
var Store = /** @class */ (function (_super) {
    __extends(Store, _super);
    function Store(_reducer, initialState) {
        var _this = _super.call(this, initialState) || this;
        _this._reducer = _reducer;
        _this._dispatcher = new Subject_1.Subject();
        _this._dispatcher
            .scan(function (state, action) { return _this._reducer(state, action); }, initialState)
            .subscribe(function (state) { return _super.prototype.next.call(_this, state); });
        return _this;
    }
    Store.prototype.getState = function () {
        return this.value;
    };
    Store.prototype.dispatch = function (action) {
        this._dispatcher.next(action);
    };
    return Store;
}(BehaviorSubject_1.BehaviorSubject));
// same reducer as before (!)
var reducer = function (state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'PLUS':
            return state + action.payload;
        default:
            return state;
    }
};
// create a new store
console.log('-- store --');
var store = new Store(reducer, 0);
console.log(store.getState()); // -> 0
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // -> 1
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // -> 2
store.dispatch({ type: 'DECREMENT' });
console.log(store.getState()); // -> 1
// observing!
console.log('-- store2 --');
var store2 = new Store(reducer, 0);
store2.subscribe((function (newState) { return console.log("state: ", newState); })); // -> state: 0
store2.dispatch({ type: 'INCREMENT' }); // -> state: 1
store2.dispatch({ type: 'INCREMENT' }); // -> state: 2
store2.dispatch({ type: 'DECREMENT' }); // -> state: 1
