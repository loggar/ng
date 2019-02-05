"use strict";
/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("../actions");
var reselect_1 = require("reselect");
;
var initialState = {
    currentUser: null
};
exports.UsersReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actions_1.UserActions.SET_CURRENT_USER:
            var user = action.user;
            return {
                currentUser: user
            };
        default:
            return state;
    }
};
exports.getUsersState = function (state) { return state.users; };
exports.getCurrentUser = reselect_1.createSelector(exports.getUsersState, function (state) { return state.currentUser; });
