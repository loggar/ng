"use strict";
/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * UserActions specifies action creators concerning Users
 */
exports.SET_CURRENT_USER = '[User] Set Current';
exports.setCurrentUser = function (user) { return ({
    type: exports.SET_CURRENT_USER,
    user: user
}); };
