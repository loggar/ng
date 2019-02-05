"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reducers_1 = require("./reducers");
var uuid_1 = require("./util/uuid");
var moment = require("moment");
var actions_1 = require("./actions");
/**
 * ChatExampleData sets up the initial data for our chats as well as
 * configuring the "bots".
 */
// the person using the app is Juliet
var me = {
    id: uuid_1.uuid(),
    isClient: true,
    name: 'Juliet',
    avatarSrc: require('images/avatars/female-avatar-1.png')
};
var ladycap = {
    id: uuid_1.uuid(),
    name: 'Lady Capulet',
    avatarSrc: require('images/avatars/female-avatar-2.png')
};
var echo = {
    id: uuid_1.uuid(),
    name: 'Echo Bot',
    avatarSrc: require('images/avatars/male-avatar-1.png')
};
var rev = {
    id: uuid_1.uuid(),
    name: 'Reverse Bot',
    avatarSrc: require('images/avatars/female-avatar-4.png')
};
var wait = {
    id: uuid_1.uuid(),
    name: 'Waiting Bot',
    avatarSrc: require('images/avatars/male-avatar-2.png')
};
var tLadycap = {
    id: 'tLadycap',
    name: ladycap.name,
    avatarSrc: ladycap.avatarSrc,
    messages: []
};
var tEcho = {
    id: 'tEcho',
    name: echo.name,
    avatarSrc: echo.avatarSrc,
    messages: []
};
var tRev = {
    id: 'tRev',
    name: rev.name,
    avatarSrc: rev.avatarSrc,
    messages: []
};
var tWait = {
    id: 'tWait',
    name: wait.name,
    avatarSrc: wait.avatarSrc,
    messages: []
};
function ChatExampleData(store) {
    // set the current User
    store.dispatch(actions_1.UserActions.setCurrentUser(me));
    // create a new thread and add messages
    store.dispatch(actions_1.ThreadActions.addThread(tLadycap));
    store.dispatch(actions_1.ThreadActions.addMessage(tLadycap, {
        author: me,
        sentAt: moment().subtract(45, 'minutes').toDate(),
        text: 'Yet let me weep for such a feeling loss.'
    }));
    store.dispatch(actions_1.ThreadActions.addMessage(tLadycap, {
        author: ladycap,
        sentAt: moment().subtract(20, 'minutes').toDate(),
        text: 'So shall you feel the loss, but not the friend which you weep for.'
    }));
    // create a few more threads
    store.dispatch(actions_1.ThreadActions.addThread(tEcho));
    store.dispatch(actions_1.ThreadActions.addMessage(tEcho, {
        author: echo,
        sentAt: moment().subtract(1, 'minutes').toDate(),
        text: 'I\'ll echo whatever you send me'
    }));
    store.dispatch(actions_1.ThreadActions.addThread(tRev));
    store.dispatch(actions_1.ThreadActions.addMessage(tRev, {
        author: rev,
        sentAt: moment().subtract(3, 'minutes').toDate(),
        text: 'I\'ll reverse whatever you send me'
    }));
    store.dispatch(actions_1.ThreadActions.addThread(tWait));
    store.dispatch(actions_1.ThreadActions.addMessage(tWait, {
        author: wait,
        sentAt: moment().subtract(4, 'minutes').toDate(),
        text: "I'll wait however many seconds you send to me before responding." +
            " Try sending '3'"
    }));
    // select the first thread
    store.dispatch(actions_1.ThreadActions.selectThread(tLadycap));
    // Now we set up the "bots". We do this by watching for new messages and
    // depending on which thread the message was sent to, the bot will respond
    // in kind.
    var handledMessages = {};
    store.subscribe(function () {
        reducers_1.getAllMessages(store.getState())
            // bots only respond to messages sent by the user, so
            // only keep messages sent by the current user
            .filter(function (message) { return message.author.id === me.id; })
            .map(function (message) {
            // This is a bit of a hack and we're stretching the limits of a faux
            // chat app. Every time there is a new message, we only want to keep the
            // new ones. This is a case where some sort of queue would be a better
            // model
            if (handledMessages.hasOwnProperty(message.id)) {
                return;
            }
            handledMessages[message.id] = true;
            switch (message.thread.id) {
                case tEcho.id:
                    // echo back the same message to the user
                    store.dispatch(actions_1.ThreadActions.addMessage(tEcho, {
                        author: echo,
                        text: message.text
                    }));
                    break;
                case tRev.id:
                    // echo back the message reveresed to the user
                    store.dispatch(actions_1.ThreadActions.addMessage(tRev, {
                        author: rev,
                        text: message.text.split('').reverse().join('')
                    }));
                    break;
                case tWait.id:
                    var waitTime = parseInt(message.text, 10);
                    var reply_1;
                    if (isNaN(waitTime)) {
                        waitTime = 0;
                        reply_1 = "I didn't understand " + message + ". Try sending me a number";
                    }
                    else {
                        reply_1 = "I waited " + waitTime + " seconds to send you this.";
                    }
                    setTimeout(function () {
                        store.dispatch(actions_1.ThreadActions.addMessage(tWait, {
                            author: wait,
                            text: reply_1
                        }));
                    }, waitTime * 1000);
                    break;
                default:
                    break;
            }
        });
    });
}
exports.default = ChatExampleData;
