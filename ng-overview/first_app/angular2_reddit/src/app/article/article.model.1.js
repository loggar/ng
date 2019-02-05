"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Article = /** @class */ (function () {
    function Article(title, link, votes) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
    return Article;
}());
exports.Article = Article;
