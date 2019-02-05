"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var services_1 = require("../../app/ts/services/services");
var models_1 = require("../../app/ts/models");
describe('MessagesService', function () {
    it('should test', function () {
        var user = new models_1.User('Nate', '');
        var thread = new models_1.Thread('t1', 'Nate', '');
        var m1 = new models_1.Message({
            author: user,
            text: 'Hi!',
            thread: thread
        });
        var m2 = new models_1.Message({
            author: user,
            text: 'Bye!',
            thread: thread
        });
        var messagesService = new services_1.MessagesService();
        // listen to each message indivdually as it comes in
        messagesService.newMessages
            .subscribe(function (message) {
            console.log('=> newMessages: ' + message.text);
        });
        // listen to the stream of most current messages
        messagesService.messages
            .subscribe(function (messages) {
            console.log('=> messages: ' + messages.length);
        });
        messagesService.addMessage(m1);
        messagesService.addMessage(m2);
        // => messages: 1
        // => newMessages: Hi!
        // => messages: 2
        // => newMessages: Bye!
    });
});
