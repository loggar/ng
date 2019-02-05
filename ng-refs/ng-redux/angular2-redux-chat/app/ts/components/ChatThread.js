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
 * ChatThread shows an individual thread in the ChatThreads. It indicates the
 * currently selected thread
 */
var ChatThread = /** @class */ (function () {
    function ChatThread() {
        this.onThreadSelected = new core_1.EventEmitter();
    }
    ChatThread.prototype.clicked = function (event) {
        this.onThreadSelected.emit(this.thread);
        event.preventDefault();
    };
    ChatThread = __decorate([
        core_1.Component({
            inputs: ['thread', 'selected'],
            selector: 'chat-thread',
            outputs: ['onThreadSelected'],
            template: "\n  <div class=\"media conversation\">\n    <div class=\"pull-left\">\n      <img class=\"media-object avatar\"\n           src=\"{{thread.avatarSrc}}\">\n    </div>\n    <div class=\"media-body\">\n      <h5 class=\"media-heading contact-name\">{{thread.name}}\n        <span *ngIf=\"selected\">&bull;</span>\n      </h5>\n      <small class=\"message-preview\">\n        {{thread.messages[thread.messages.length - 1].text}}\n      </small>\n    </div>\n    <a (click)=\"clicked($event)\" class=\"div-link\">Select</a>\n  </div>\n  "
        })
    ], ChatThread);
    return ChatThread;
}());
exports.default = ChatThread;
