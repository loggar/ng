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
    ids: [],
    currentThreadId: null,
    entities: {}
};
/**
 * The `ThreadsReducer` describes how to modify the `ThreadsState` given a
 * particular action.
 */
exports.ThreadsReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    var _a, _b, _c;
    switch (action.type) {
        // Adds a new Thread to the list of entities
        case actions_1.ThreadActions.ADD_THREAD: {
            var thread = action.thread;
            if (state.ids.includes(thread.id)) {
                return state;
            }
            return {
                ids: state.ids.concat([thread.id]),
                currentThreadId: state.currentThreadId,
                entities: Object.assign({}, state.entities, (_a = {},
                    _a[thread.id] = thread,
                    _a))
            };
        }
        // Adds a new Message to a particular Thread
        case actions_1.ThreadActions.ADD_MESSAGE: {
            var thread = action.thread;
            var message = action.message;
            // special case: if the message being added is in the current thread, then
            // mark it as read
            var isRead = message.thread.id === state.currentThreadId ?
                true : message.isRead;
            var newMessage = Object.assign({}, message, { isRead: isRead });
            // grab the old thraed from entities
            var oldThread = state.entities[thread.id];
            // create a new thread which has our newMessage
            var newThread = Object.assign({}, oldThread, {
                messages: oldThread.messages.concat([newMessage])
            });
            return {
                ids: state.ids,
                currentThreadId: state.currentThreadId,
                entities: Object.assign({}, state.entities, (_b = {},
                    _b[thread.id] = newThread,
                    _b))
            };
        }
        // Select a particular thread in the UI
        case actions_1.ThreadActions.SELECT_THREAD: {
            var thread = action.thread;
            var oldThread = state.entities[thread.id];
            // mark the messages as read
            var newMessages = oldThread.messages.map(function (message) { return Object.assign({}, message, { isRead: true }); });
            // give them to this new thread
            var newThread = Object.assign({}, oldThread, {
                messages: newMessages
            });
            return {
                ids: state.ids,
                currentThreadId: thread.id,
                entities: Object.assign({}, state.entities, (_c = {},
                    _c[thread.id] = newThread,
                    _c))
            };
        }
        default:
            return state;
    }
};
exports.getThreadsState = function (state) { return state.threads; };
exports.getThreadsEntities = reselect_1.createSelector(exports.getThreadsState, function (state) { return state.entities; });
exports.getAllThreads = reselect_1.createSelector(exports.getThreadsEntities, function (entities) { return Object.keys(entities)
    .map(function (threadId) { return entities[threadId]; }); });
exports.getUnreadMessagesCount = reselect_1.createSelector(exports.getAllThreads, function (threads) { return threads.reduce(function (unreadCount, thread) {
    thread.messages.forEach(function (message) {
        if (!message.isRead) {
            ++unreadCount;
        }
    });
    return unreadCount;
}, 0); });
// This selector emits the current thread
exports.getCurrentThread = reselect_1.createSelector(exports.getThreadsEntities, exports.getThreadsState, function (entities, state) {
    return entities[state.currentThreadId];
});
exports.getAllMessages = reselect_1.createSelector(exports.getAllThreads, function (threads) {
    return threads.reduce(// gather all messages
    function (messages, thread) { return messages.concat(thread.messages); }, []).sort(function (m1, m2) { return m1.sentAt - m2.sentAt; });
}); // sort them by time
