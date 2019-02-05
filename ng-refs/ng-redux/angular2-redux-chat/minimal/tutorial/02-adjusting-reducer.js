"use strict";
var reducer = function (state, action) {
    if (action.type === 'INCREMENT') {
        return state + 1;
    }
    if (action.type === 'DECREMENT') {
        return state - 1;
    }
    return state;
};
var incrementAction = { type: 'INCREMENT' };
console.log(reducer(0, incrementAction)); // -> 1
console.log(reducer(1, incrementAction)); // -> 2
var decrementAction = { type: 'DECREMENT' };
console.log(reducer(100, decrementAction)); // -> 99
