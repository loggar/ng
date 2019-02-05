"use strict";
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
// same reducer as before
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
var store = new Store(reducer, 0);
console.log(store.getState()); // -> 0
// subscribe
var unsubscribe = store.subscribe(function () {
    console.log('subscribed: ', store.getState());
});
store.dispatch({ type: 'INCREMENT' }); // -> subscribed: 1
store.dispatch({ type: 'INCREMENT' }); // -> subscribed: 2
unsubscribe();
store.dispatch({ type: 'DECREMENT' }); // (nothing logged)
// decrement happened, even though we weren't listening for it
console.log(store.getState()); // -> 1
