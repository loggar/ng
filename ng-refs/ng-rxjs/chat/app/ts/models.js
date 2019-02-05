"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("./util/uuid");
var User = /** @class */ (function () {
    function User(name, avatarSrc) {
        this.name = name;
        this.avatarSrc = avatarSrc;
        this.id = uuid_1.uuid();
    }
    return User;
}());
exports.User = User;
var Thread = /** @class */ (function () {
    function Thread(id, name, avatarSrc) {
        this.id = id || uuid_1.uuid();
        this.name = name;
        this.avatarSrc = avatarSrc;
    }
    return Thread;
}());
exports.Thread = Thread;
var Message = /** @class */ (function () {
    function Message(obj) {
        this.id = obj && obj.id || uuid_1.uuid();
        this.isRead = obj && obj.isRead || false;
        this.sentAt = obj && obj.sentAt || new Date();
        this.author = obj && obj.author || null;
        this.text = obj && obj.text || null;
        this.thread = obj && obj.thread || null;
    }
    return Message;
}());
exports.Message = Message;
