"use strict";
var reducer = function (state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state; // <-- dont forget!
    }
};
var incrementAction = { type: 'INCREMENT' };
console.log(reducer(0, incrementAction)); // -> 1
console.log(reducer(1, incrementAction)); // -> 2
var decrementAction = { type: 'DECREMENT' };
console.log(reducer(100, decrementAction)); // -> 99
// any other action just returns the input state
var unknownAction = { type: 'UNKNOWN' };
console.log(reducer(100, unknownAction)); // -> 100
