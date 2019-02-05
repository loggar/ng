"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var article_model_ts_1 = require("./article.model.ts");
var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
        this.article = new article_model_ts_1.Article('Angular 2', 'http://angular.io', 10);
    }
    ArticleComponent.prototype.voteUp = function () {
        this.article.voteUp();
        return false;
    };
    ArticleComponent.prototype.voteDown = function () {
        this.article.voteDown();
        return false;
    };
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent = __decorate([
        core_1.Component({
            selector: 'app-article',
            templateUrl: './article.component.html',
            styleUrls: ['./article.component.css'],
            host: {
                class: 'row'
            }
        })
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
