"use strict";
/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("../util/uuid");
/**
 * ThreadActions specifies _action creators_ (i.e. objects that describe
 * changes to the reducers) that are concerned with Threads and Messages
 */
exports.ADD_THREAD = '[Thread] Add';
exports.addThread = function (thread) { return ({
    type: exports.ADD_THREAD,
    thread: thread
}); };
exports.ADD_MESSAGE = '[Thread] Add Message';
exports.addMessage = function (thread, messageArgs) {
    var defaults = {
        id: uuid_1.uuid(),
        sentAt: new Date(),
        isRead: false,
        thread: thread
    };
    var message = Object.assign({}, defaults, messageArgs);
    return {
        type: exports.ADD_MESSAGE,
        thread: thread,
        message: message
    };
};
exports.SELECT_THREAD = '[Thread] Select';
exports.selectThread = function (thread) { return ({
    type: exports.SELECT_THREAD,
    thread: thread
}); };
