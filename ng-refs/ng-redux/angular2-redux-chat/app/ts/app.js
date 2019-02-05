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
var core_2 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var forms_1 = require("@angular/forms");
var redux_1 = require("redux");
var app_store_1 = require("./app-store");
var reducers_1 = require("./reducers");
var ChatPage_1 = require("./pages/ChatPage");
var ChatThreads_1 = require("./containers/ChatThreads");
var ChatNavBar_1 = require("./containers/ChatNavBar");
var ChatWindow_1 = require("./containers/ChatWindow");
var ChatThread_1 = require("./components/ChatThread");
var ChatMessage_1 = require("./components/ChatMessage");
var FromNowPipe_1 = require("./pipes/FromNowPipe");
var ChatExampleData_1 = require("./ChatExampleData");
require('../css/styles.css');
var ChatApp = /** @class */ (function () {
    function ChatApp(store) {
        this.store = store;
        ChatExampleData_1.default(store);
    }
    ChatApp = __decorate([
        core_1.Component({
            selector: 'chat-app',
            template: "\n  <div>\n    <chat-page></chat-page>\n  </div>\n  "
        }),
        __param(0, core_1.Inject(app_store_1.AppStore))
    ], ChatApp);
    return ChatApp;
}());
var devtools = window['devToolsExtension'] ?
    window['devToolsExtension']() : function (f) { return f; };
var store = redux_1.createStore(reducers_1.default, redux_1.compose(devtools));
var ChatAppModule = /** @class */ (function () {
    function ChatAppModule() {
    }
    ChatAppModule = __decorate([
        core_2.NgModule({
            declarations: [
                ChatApp,
                ChatPage_1.default,
                ChatThreads_1.default,
                ChatNavBar_1.default,
                ChatWindow_1.default,
                ChatThread_1.default,
                ChatMessage_1.default,
                FromNowPipe_1.FromNowPipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            bootstrap: [ChatApp],
            providers: [
                { provide: app_store_1.AppStore, useFactory: function () { return store; } }
            ]
        })
    ], ChatAppModule);
    return ChatAppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(ChatAppModule)
    .catch(function (err) { return console.error(err); });
// --------------------
// You can ignore these 'require' statements. The code will work without them.
// They're currently required to get watch-reloading
// from webpack, but removing them is a TODO
require('./app-store');
require('./reducers');
require('./reducers/UsersReducer');
require('./reducers/ThreadsReducer');
require('./models');
require('./models/User');
require('./models/Message');
require('./models/Thread');
require('./actions');
require('./actions/UserActions');
require('./actions/ThreadActions');
require('./ChatExampleData');
require('./pages/ChatPage');
require('./containers/ChatNavBar');
require('./containers/ChatWindow');
require('./containers/ChatThreads');
require('./components/ChatThread');
require('./components/ChatMessage');
