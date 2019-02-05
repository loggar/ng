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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * ChatMessage is a component that shows a single Message in the ChatWindow.
 * ChatMessage shows the message a user sent and indicates whether it is
 * incoming or outgoing
 */
var ChatMessage = /** @class */ (function () {
    function ChatMessage() {
    }
    ChatMessage.prototype.ngOnInit = function () {
        this.incoming = !this.message.author.isClient;
    };
    ChatMessage = __decorate([
        core_1.Component({
            inputs: ['message'],
            selector: 'chat-message',
            template: "\n  <div class=\"msg-container\"\n       [ngClass]=\"{'base-sent': !incoming, 'base-receive': incoming}\">\n\n    <div class=\"avatar\"\n         *ngIf=\"!incoming\">\n      <img src=\"{{message.author.avatarSrc}}\">\n    </div>\n\n    <div class=\"messages\"\n      [ngClass]=\"{'msg-sent': !incoming, 'msg-receive': incoming}\">\n      <p>{{message.text}}</p>\n      <p class=\"time\">{{message.sender}} \u2022 {{message.sentAt | fromNow}}</p>\n    </div>\n\n    <div class=\"avatar\"\n         *ngIf=\"incoming\">\n      <img src=\"{{message.author.avatarSrc}}\">\n    </div>\n  </div>\n  "
        })
    ], ChatMessage);
    return ChatMessage;
}());
exports.default = ChatMessage;
