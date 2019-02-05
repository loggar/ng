"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var models_1 = require("../models");
var _ = require("underscore");
var ThreadsService = /** @class */ (function () {
    function ThreadsService(messagesService) {
        this.messagesService = messagesService;
        // `currentThread` contains the currently selected thread
        this.currentThread = new rxjs_1.BehaviorSubject(new models_1.Thread());
        this.threads = messagesService.messages
            .map(function (messages) {
            var threads = {};
            // Store the message's thread in our accumulator `threads`
            messages.map(function (message) {
                threads[message.thread.id] = threads[message.thread.id] ||
                    message.thread;
                // Cache the most recent message for each thread
                var messagesThread = threads[message.thread.id];
                if (!messagesThread.lastMessage ||
                    messagesThread.lastMessage.sentAt < message.sentAt) {
                    messagesThread.lastMessage = message;
                }
            });
            return threads;
        });
        this.orderedThreads = this.threads
            .map(function (threadGroups) {
            var threads = _.values(threadGroups);
            return _.sortBy(threads, function (t) { return t.lastMessage.sentAt; }).reverse();
        });
        this.currentThreadMessages = this.currentThread
            .combineLatest(messagesService.messages, function (currentThread, messages) {
            if (currentThread && messages.length > 0) {
                return _.chain(messages)
                    .filter(function (message) {
                    return (message.thread.id === currentThread.id);
                })
                    .map(function (message) {
                    message.isRead = true;
                    return message;
                })
                    .value();
            }
            else {
                return [];
            }
        });
        this.currentThread.subscribe(this.messagesService.markThreadAsRead);
    }
    ThreadsService.prototype.setCurrentThread = function (newThread) {
        this.currentThread.next(newThread);
    };
    ThreadsService = __decorate([
        core_1.Injectable()
    ], ThreadsService);
    return ThreadsService;
}());
exports.ThreadsService = ThreadsService;
exports.threadsServiceInjectables = [
    ThreadsService
];
