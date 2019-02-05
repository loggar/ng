"use strict";
var Store = /** @class */ (function () {
    function Store(reducer, initialState) {
        this.reducer = reducer;
        this._state = initialState;
    }
    Store.prototype.getState = function () {
        return this._state;
    };
    Store.prototype.dispatch = function (action) {
        this._state = this.reducer(this._state, action);
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
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // -> 1
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // -> 2
store.dispatch({ type: 'DECREMENT' });
console.log(store.getState()); // -> 1
