"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _ = require("underscore");
var ChatNavBar = /** @class */ (function () {
    function ChatNavBar(messagesService, threadsService) {
        this.messagesService = messagesService;
        this.threadsService = threadsService;
    }
    ChatNavBar.prototype.ngOnInit = function () {
        var _this = this;
        this.messagesService.messages
            .combineLatest(this.threadsService.currentThread, function (messages, currentThread) {
            return [currentThread, messages];
        })
            .subscribe(function (_a) {
            var currentThread = _a[0], messages = _a[1];
            _this.unreadMessagesCount =
                _.reduce(messages, function (sum, m) {
                    var messageIsInCurrentThread = m.thread &&
                        currentThread &&
                        (currentThread.id === m.thread.id);
                    if (m && !m.isRead && !messageIsInCurrentThread) {
                        sum = sum + 1;
                    }
                    return sum;
                }, 0);
        });
    };
    ChatNavBar = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            template: "\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"https://ng-book.com/2\">\n          <img src=\"" + require('images/logos/ng-book-2-minibook.png') + "\"/>\n           ng-book 2\n        </a>\n      </div>\n      <p class=\"navbar-text navbar-right\">\n        <button class=\"btn btn-primary\" type=\"button\">\n          Messages <span class=\"badge\">{{unreadMessagesCount}}</span>\n        </button>\n      </p>\n    </div>\n  </nav>\n  "
        })
    ], ChatNavBar);
    return ChatNavBar;
}());
exports.ChatNavBar = ChatNavBar;
