"use strict";
/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_store_1 = require("../app-store");
var actions_1 = require("../actions");
var reducers_1 = require("../reducers");
/**
 * ChatThreads shows the list of current threads
 */
var ChatThreads = /** @class */ (function () {
    function ChatThreads(store) {
        var _this = this;
        this.store = store;
        store.subscribe(function () { return _this.updateState(); });
        this.updateState();
    }
    ChatThreads.prototype.updateState = function () {
        var state = this.store.getState();
        // Store the threads list
        this.threads = reducers_1.getAllThreads(state);
        // We want to mark the current thread as selected,
        // so we store the currentThreadId as a value
        this.currentThreadId = reducers_1.getCurrentThread(state).id;
    };
    ChatThreads.prototype.handleThreadClicked = function (thread) {
        this.store.dispatch(actions_1.ThreadActions.selectThread(thread));
    };
    ChatThreads = __decorate([
        core_1.Component({
            selector: 'chat-threads',
            template: "\n  <!-- conversations -->\n  <div class=\"row\">\n    <div class=\"conversation-wrap\">\n      <chat-thread\n           *ngFor=\"let thread of threads\"\n           [thread]=\"thread\"\n           [selected]=\"thread.id === currentThreadId\"\n           (onThreadSelected)=\"handleThreadClicked($event)\">\n      </chat-thread>\n    </div>\n  </div>\n  "
        }),
        __param(0, core_1.Inject(app_store_1.AppStore))
    ], ChatThreads);
    return ChatThreads;
}());
exports.default = ChatThreads;
