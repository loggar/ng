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
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var forms_1 = require("@angular/forms");
/*
 * Components
 */
var ChatNavBar_1 = require("./components/ChatNavBar");
var ChatThreads_1 = require("./components/ChatThreads");
var ChatWindow_1 = require("./components/ChatWindow");
/*
 * Injectables
 */
var services_1 = require("./services/services");
var util_1 = require("./util/util");
var ChatExampleData_1 = require("./ChatExampleData");
/*
 * Webpack
 */
require('../css/styles.css');
var ChatApp = /** @class */ (function () {
    function ChatApp(messagesService, threadsService, userService) {
        this.messagesService = messagesService;
        this.threadsService = threadsService;
        this.userService = userService;
        ChatExampleData_1.ChatExampleData.init(messagesService, threadsService, userService);
    }
    ChatApp = __decorate([
        core_1.Component({
            selector: 'chat-app',
            template: "\n  <div>\n    <nav-bar></nav-bar>\n    <div class=\"container\">\n      <chat-threads></chat-threads>\n      <chat-window></chat-window>\n    </div>\n  </div>\n  "
        })
    ], ChatApp);
    return ChatApp;
}());
var ChatAppModule = /** @class */ (function () {
    function ChatAppModule() {
    }
    ChatAppModule = __decorate([
        core_1.NgModule({
            declarations: [
                ChatApp,
                ChatNavBar_1.ChatNavBar,
                ChatThreads_1.ChatThreads,
                ChatThreads_1.ChatThread,
                ChatWindow_1.ChatWindow,
                ChatWindow_1.ChatMessage,
                util_1.utilInjectables
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            bootstrap: [ChatApp],
            providers: [services_1.servicesInjectables]
        })
    ], ChatAppModule);
    return ChatAppModule;
}());
exports.ChatAppModule = ChatAppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(ChatAppModule);
// --------------------
// You can ignore these 'require' statements. The code will work without them.
// They're currently required to get watch-reloading
// from webpack, but removing them is a TODO
require('./services/services');
require('./ChatExampleData');
require('./util/util');
require('./components/ChatNavBar');
require('./components/ChatWindow');
require('./components/ChatThreads');
