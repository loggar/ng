"use strict";
/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:typedef */
var redux_1 = require("redux");
var UsersReducer_ts_1 = require("./UsersReducer.ts");
__export(require("./UsersReducer.ts"));
var ThreadsReducer_ts_1 = require("./ThreadsReducer.ts");
__export(require("./ThreadsReducer.ts"));
var rootReducer = redux_1.combineReducers({
    users: UsersReducer_ts_1.UsersReducer,
    threads: ThreadsReducer_ts_1.ThreadsReducer
});
exports.default = rootReducer;
