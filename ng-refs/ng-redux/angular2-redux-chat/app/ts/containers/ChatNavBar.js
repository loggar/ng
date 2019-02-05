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
var reducers_1 = require("../reducers");
/**
 * ChatNavBar shows the header and unread count
 */
var ChatNavBar = /** @class */ (function () {
    function ChatNavBar(store) {
        var _this = this;
        this.store = store;
        store.subscribe(function () { return _this.updateState(); });
        this.updateState();
    }
    ChatNavBar.prototype.updateState = function () {
        this.unreadMessagesCount = reducers_1.getUnreadMessagesCount(this.store.getState());
    };
    ChatNavBar = __decorate([
        core_1.Component({
            selector: 'chat-nav-bar',
            template: "\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"https://ng-book.com/2\">\n          <img src=\"" + require('images/logos/ng-book-2-minibook.png') + "\"/>\n           ng-book 2\n        </a>\n      </div>\n      <p class=\"navbar-text navbar-right\">\n        <button class=\"btn btn-primary\" type=\"button\">\n          Messages <span class=\"badge\">{{ unreadMessagesCount }}</span>\n        </button>\n      </p>\n    </div>\n  </nav>\n  "
        }),
        __param(0, core_1.Inject(app_store_1.AppStore))
    ], ChatNavBar);
    return ChatNavBar;
}());
exports.default = ChatNavBar;
