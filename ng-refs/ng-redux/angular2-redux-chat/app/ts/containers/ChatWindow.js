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
 * ChatWindow is the container which handles the current chat
 */
var ChatWindow = /** @class */ (function () {
    function ChatWindow(store, el) {
        var _this = this;
        this.store = store;
        this.el = el;
        store.subscribe(function () { return _this.updateState(); });
        this.updateState();
        this.draftMessage = { text: '' };
    }
    ChatWindow.prototype.updateState = function () {
        var state = this.store.getState();
        this.currentThread = reducers_1.getCurrentThread(state);
        this.currentUser = reducers_1.getCurrentUser(state);
        this.scrollToBottom();
    };
    ChatWindow.prototype.scrollToBottom = function () {
        var scrollPane = this.el
            .nativeElement.querySelector('.msg-container-base');
        if (scrollPane) {
            setTimeout(function () { return scrollPane.scrollTop = scrollPane.scrollHeight; });
        }
    };
    ChatWindow.prototype.sendMessage = function () {
        this.store.dispatch(actions_1.ThreadActions.addMessage(this.currentThread, {
            author: this.currentUser,
            isRead: true,
            text: this.draftMessage.text
        }));
        this.draftMessage = { text: '' };
    };
    ChatWindow.prototype.onEnter = function (event) {
        this.sendMessage();
        event.preventDefault();
    };
    ChatWindow = __decorate([
        core_1.Component({
            selector: 'chat-window',
            template: "\n    <div class=\"chat-window-container\">\n      <div class=\"chat-window\">\n        <div class=\"panel-container\">\n          <div class=\"panel panel-default\">\n\n            <div class=\"panel-heading top-bar\">\n              <div class=\"panel-title-container\">\n                <h3 class=\"panel-title\">\n                  <span class=\"glyphicon glyphicon-comment\"></span>\n                  Chat - {{currentThread.name}}\n                </h3>\n              </div>\n              <div class=\"panel-buttons-container\"  >\n                <!-- you could put minimize or close buttons here -->\n              </div>\n            </div>\n\n            <div class=\"panel-body msg-container-base\">\n              <chat-message\n                   *ngFor=\"let message of currentThread.messages\"\n                   [message]=\"message\">\n              </chat-message>\n            </div>\n\n            <div class=\"panel-footer\">\n              <div class=\"input-group\">\n                <input type=\"text\"\n                       class=\"chat-input\"\n                       placeholder=\"Write your message here...\"\n                       (keydown.enter)=\"onEnter($event)\"\n                       [(ngModel)]=\"draftMessage.text\" />\n                <span class=\"input-group-btn\">\n                  <button class=\"btn-chat\"\n                     (click)=\"onEnter($event)\"\n                     >Send</button>\n                </span>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __param(0, core_1.Inject(app_store_1.AppStore))
    ], ChatWindow);
    return ChatWindow;
}());
exports.default = ChatWindow;
