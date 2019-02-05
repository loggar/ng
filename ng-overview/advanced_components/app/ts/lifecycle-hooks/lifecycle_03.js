"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var OnInitCmp = /** @class */ (function () {
    function OnInitCmp() {
    }
    OnInitCmp.prototype.ngOnInit = function () {
        console.log('On init');
    };
    OnInitCmp.prototype.ngOnDestroy = function () {
        console.log('On destroy');
    };
    OnInitCmp = __decorate([
        core_1.Component({
            selector: 'on-init',
            template: "\n  <div class=\"ui label\">\n    <i class=\"cubes icon\"></i> Init/Destroy\n  </div>\n  "
        })
    ], OnInitCmp);
    return OnInitCmp;
}());
var OnChangeCmp = /** @class */ (function () {
    function OnChangeCmp() {
    }
    OnChangeCmp.prototype.ngOnChanges = function (changes) {
        console.log('Changes', changes);
    };
    __decorate([
        core_1.Input()
    ], OnChangeCmp.prototype, "name", void 0);
    __decorate([
        core_1.Input()
    ], OnChangeCmp.prototype, "comment", void 0);
    OnChangeCmp = __decorate([
        core_1.Component({
            selector: 'on-change',
            template: "\n  <div class=\"ui comments\">\n    <div class=\"comment\">\n      <a class=\"avatar\">\n        <img src=\"/app/images/avatars/matt.jpg\">\n      </a>\n      <div class=\"content\">\n        <a class=\"author\">{{name}}</a>\n        <div class=\"text\">\n          {{comment}}\n        </div>\n      </div>\n    </div>\n  </div>\n  "
        })
    ], OnChangeCmp);
    return OnChangeCmp;
}());
var DoCheckItem = /** @class */ (function () {
    function DoCheckItem(differs) {
        this.differ = differs.find([]).create(null);
        this.onRemove = new core_1.EventEmitter();
    }
    DoCheckItem.prototype.ngDoCheck = function () {
        var _this = this;
        var changes = this.differ.diff(this.comment);
        if (changes) {
            changes.forEachAddedItem(function (r) { return _this.logChange('added', r); });
            changes.forEachRemovedItem(function (r) { return _this.logChange('removed', r); });
            changes.forEachChangedItem(function (r) { return _this.logChange('changed', r); });
        }
    };
    DoCheckItem.prototype.logChange = function (action, r) {
        if (action === 'changed') {
            console.log(r.key, action, 'from', r.previousValue, 'to', r.currentValue);
        }
        if (action === 'added') {
            console.log(action, r.key, 'with', r.currentValue);
        }
        if (action === 'removed') {
            console.log(action, r.key, '(was ' + r.previousValue + ')');
        }
    };
    DoCheckItem.prototype.remove = function () {
        this.onRemove.emit(this.comment);
    };
    DoCheckItem.prototype.clear = function () {
        delete this.comment.comment;
    };
    DoCheckItem.prototype.like = function () {
        this.comment.likes += 1;
    };
    __decorate([
        core_1.Input()
    ], DoCheckItem.prototype, "comment", void 0);
    DoCheckItem = __decorate([
        core_1.Component({
            selector: 'do-check-item',
            outputs: ['onRemove'],
            template: "\n  <div class=\"ui feed\">\n    <div class=\"event\">\n      <div class=\"label\" *ngIf=\"comment.author\">\n        <img src=\"/app/images/avatars/{{comment.author.toLowerCase()}}.jpg\">\n      </div>\n      <div class=\"content\">\n        <div class=\"summary\">\n          <a class=\"user\">\n            {{comment.author}}\n          </a> posted a comment\n          <div class=\"date\">\n            1 Hour Ago\n          </div>\n        </div>\n        <div class=\"extra text\">\n          {{comment.comment}}\n        </div>\n        <div class=\"meta\">\n          <a class=\"trash\" (click)=\"remove()\">\n            <i class=\"trash icon\"></i> Remove\n          </a>\n          <a class=\"trash\" (click)=\"clear()\">\n            <i class=\"eraser icon\"></i> Clear\n          </a>\n          <a class=\"like\" (click)=\"like()\">\n            <i class=\"like icon\"></i> {{comment.likes}} Likes\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  "
        })
    ], DoCheckItem);
    return DoCheckItem;
}());
var DoCheckCmp = /** @class */ (function () {
    function DoCheckCmp(differs) {
        this.differ = differs.find([]).create(null);
        this.comments = [];
        this.authors = ['Elliot', 'Helen', 'Jenny', 'Joe', 'Justen', 'Matt'];
        this.texts = [
            "Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.",
            'Really cool!',
            'Thanks!'
        ];
        this.addComment();
    }
    DoCheckCmp.prototype.getRandomInt = function (max) {
        return Math.floor(Math.random() * (max + 1));
    };
    DoCheckCmp.prototype.getRandomItem = function (array) {
        var pos = this.getRandomInt(array.length - 1);
        return array[pos];
    };
    DoCheckCmp.prototype.addComment = function () {
        this.comments.push({
            author: this.getRandomItem(this.authors),
            comment: this.getRandomItem(this.texts),
            likes: this.getRandomInt(20)
        });
    };
    DoCheckCmp.prototype.removeComment = function (comment) {
        var pos = this.comments.indexOf(comment);
        this.comments.splice(pos, 1);
    };
    DoCheckCmp.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.comments);
        if (changes) {
            changes.forEachAddedItem(function (r) { return console.log('Added', r.item); });
            changes.forEachRemovedItem(function (r) { return console.log('Removed', r.item); });
        }
    };
    DoCheckCmp = __decorate([
        core_1.Component({
            selector: 'do-check',
            template: "\n  <do-check-item [comment]=\"comment\"\n    *ngFor=\"let comment of comments\" (onRemove)=\"removeComment($event)\">\n  </do-check-item>\n\n  <button class=\"ui primary button\" (click)=\"addComment()\">\n    Add\n  </button>\n  "
        })
    ], DoCheckCmp);
    return DoCheckCmp;
}());
var LifecycleSampleApp3 = /** @class */ (function () {
    function LifecycleSampleApp3() {
        // OnInit and OnDestroy
        this.display = true;
        // OnChange
        this.name = 'Felipe Coury';
        this.comment = 'I am learning so much!';
    }
    LifecycleSampleApp3.prototype.setValues = function (namefld, commentfld) {
        this.name = namefld.value;
        this.comment = commentfld.value;
    };
    LifecycleSampleApp3.prototype.toggle = function () {
        this.display = !this.display;
    };
    LifecycleSampleApp3 = __decorate([
        core_1.Component({
            selector: 'lifecycle-sample-app',
            template: "\n  <h4 class=\"ui horizontal divider header\">\n    OnInit and OnDestroy\n  </h4>\n\n  <button class=\"ui primary button\" (click)=\"toggle()\">\n    Toggle\n  </button>\n  <on-init *ngIf=\"display\"></on-init>\n\n  <h4 class=\"ui horizontal divider header\">\n    OnChange\n  </h4>\n\n  <div class=\"ui form\">\n    <div class=\"field\">\n      <label>Name</label>\n      <input type=\"text\" #namefld value=\"{{name}}\"\n             (keyup)=\"setValues(namefld, commentfld)\">\n    </div>\n\n    <div class=\"field\">\n      <label>Comment</label>\n      <textarea (keyup)=\"setValues(namefld, commentfld)\"\n                rows=\"2\" #commentfld>{{comment}}</textarea>\n    </div>\n  </div>\n\n  <on-change [name]=\"name\" [comment]=\"comment\"></on-change>\n\n  <h4 class=\"ui horizontal divider header\">\n    DoCheck\n  </h4>\n\n  <do-check></do-check>\n  "
        })
    ], LifecycleSampleApp3);
    return LifecycleSampleApp3;
}());
exports.LifecycleSampleApp3 = LifecycleSampleApp3;
var LifecycleSampleApp3Module = /** @class */ (function () {
    function LifecycleSampleApp3Module() {
    }
    LifecycleSampleApp3Module = __decorate([
        core_1.NgModule({
            declarations: [
                LifecycleSampleApp3,
                DoCheckItem,
                OnInitCmp,
                OnChangeCmp,
                DoCheckCmp
            ],
            imports: [common_1.CommonModule],
            exports: [LifecycleSampleApp3]
        })
    ], LifecycleSampleApp3Module);
    return LifecycleSampleApp3Module;
}());
exports.LifecycleSampleApp3Module = LifecycleSampleApp3Module;
