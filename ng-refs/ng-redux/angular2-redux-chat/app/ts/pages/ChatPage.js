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
 * ChatPage is the page which shows our chat view. In a larger app we'd
 * have several pages.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage() {
    }
    ChatPage = __decorate([
        core_1.Component({
            selector: 'chat-page',
            template: "\n  <div>\n    <chat-nav-bar></chat-nav-bar>\n    <div class=\"container\">\n      <chat-threads></chat-threads>\n      <chat-window></chat-window>\n    </div>\n  </div>\n  "
        })
    ], ChatPage);
    return ChatPage;
}());
exports.default = ChatPage;
