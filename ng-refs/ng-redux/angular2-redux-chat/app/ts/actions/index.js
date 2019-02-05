"use strict";
/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ThreadActions = require("./ThreadActions");
exports.ThreadActions = ThreadActions;
var UserActions = require("./UserActions");
exports.UserActions = UserActions;
// export here for injecting the dependencies (e.g. at bootstrap)
exports.default = [
    ThreadActions,
    UserActions
];
