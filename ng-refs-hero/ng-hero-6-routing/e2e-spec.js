'use strict'; // necessary for es6 output in node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var expectedH1 = 'Tour of Heroes';
var expectedTitle = "Angular " + expectedH1;
var targetHero = { id: 15, name: 'Magneta' };
var targetHeroDashboardIndex = 3;
var nameSuffix = 'X';
var newHeroName = targetHero.name + nameSuffix;
var Hero = /** @class */ (function () {
    function Hero() {
    }
    // Factory methods
    // Get hero from s formatted as '<id> <name>'.
    Hero.fromString = function (s) {
        return {
            id: +s.substr(0, s.indexOf(' ')),
            name: s.substr(s.indexOf(' ') + 1),
        };
    };
    // Get hero id and name from the given detail element.
    Hero.fromDetail = function (detail) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, _name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, detail.all(protractor_1.by.css('div')).first().getText()];
                    case 1:
                        _id = _a.sent();
                        return [4 /*yield*/, detail.element(protractor_1.by.css('h2')).getText()];
                    case 2:
                        _name = _a.sent();
                        return [2 /*return*/, {
                                id: +_id.substr(_id.indexOf(' ') + 1),
                                name: _name.substr(0, _name.lastIndexOf(' '))
                            }];
                }
            });
        });
    };
    return Hero;
}());
describe('Tutorial part 5', function () {
    beforeAll(function () { return protractor_1.browser.get(''); });
    function getPageElts() {
        var navElts = protractor_1.element.all(protractor_1.by.css('my-app nav a'));
        return {
            navElts: navElts,
            myDashboardHref: navElts.get(0),
            myDashboard: protractor_1.element(protractor_1.by.css('my-app my-dashboard')),
            topHeroes: protractor_1.element.all(protractor_1.by.css('my-app my-dashboard > div h4')),
            myHeroesHref: navElts.get(1),
            myHeroes: protractor_1.element(protractor_1.by.css('my-app my-heroes')),
            allHeroes: protractor_1.element.all(protractor_1.by.css('my-app my-heroes li')),
            selectedHero: protractor_1.element(protractor_1.by.css('my-app li.selected')),
            selectedHeroSubview: protractor_1.element(protractor_1.by.css('my-app my-heroes > div')),
            heroDetail: protractor_1.element(protractor_1.by.css('my-app hero-detail > div'))
        };
    }
    describe('Initial page', function () {
        it("has title '" + expectedTitle + "'", function () {
            expect(protractor_1.browser.getTitle()).toEqual(expectedTitle);
        });
        it("has h1 '" + expectedH1 + "'", function () {
            expectHeading(1, expectedH1);
        });
        var expectedViewNames = ['Dashboard', 'Heroes'];
        it("has views " + expectedViewNames, function () {
            var viewNames = getPageElts().navElts.map(function (el) { return el.getText(); });
            expect(viewNames).toEqual(expectedViewNames);
        });
        it('has dashboard as the active view', function () {
            var page = getPageElts();
            expect(page.myDashboard.isPresent()).toBeTruthy();
        });
    });
    describe('Dashboard tests', function () {
        beforeAll(function () { return protractor_1.browser.get(''); });
        it('has top heroes', function () {
            var page = getPageElts();
            expect(page.topHeroes.count()).toEqual(4);
        });
        it("selects and routes to " + targetHero.name + " details", dashboardSelectTargetHero);
        it("updates hero name (" + newHeroName + ") in details view", updateHeroNameInDetailView);
        it("saves and shows " + newHeroName + " in Dashboard", function () {
            protractor_1.element(protractor_1.by.buttonText('Back')).click();
            var targetHeroElt = getPageElts().topHeroes.get(targetHeroDashboardIndex);
            expect(targetHeroElt.getText()).toEqual(newHeroName);
        });
    });
    describe('Heroes tests', function () {
        beforeAll(function () { return protractor_1.browser.get(''); });
        it('can switch to Heroes view', function () {
            getPageElts().myHeroesHref.click();
            var page = getPageElts();
            expect(page.myHeroes.isPresent()).toBeTruthy();
            expect(page.allHeroes.count()).toEqual(10, 'number of heroes');
        });
        it("selects and shows " + targetHero.name + " as selected in list", function () {
            getHeroLiEltById(targetHero.id).click();
            var expectedText = targetHero.id + " " + targetHero.name;
            expect(getPageElts().selectedHero.getText()).toBe(expectedText);
        });
        it('shows selected hero subview', function () { return __awaiter(_this, void 0, void 0, function () {
            var page, title, expectedTitle;
            return __generator(this, function (_a) {
                page = getPageElts();
                title = page.selectedHeroSubview.element(protractor_1.by.css('h2')).getText();
                expectedTitle = targetHero.name.toUpperCase() + " is my hero";
                expect(title).toEqual(expectedTitle);
                return [2 /*return*/];
            });
        }); });
        it('can route to hero details', function () { return __awaiter(_this, void 0, void 0, function () {
            var page, hero;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.element(protractor_1.by.buttonText('View Details')).click();
                        page = getPageElts();
                        expect(page.heroDetail.isPresent()).toBeTruthy('shows hero detail');
                        return [4 /*yield*/, Hero.fromDetail(page.heroDetail)];
                    case 1:
                        hero = _a.sent();
                        expect(hero.id).toEqual(targetHero.id);
                        expect(hero.name).toEqual(targetHero.name);
                        return [2 /*return*/];
                }
            });
        }); });
        it("updates hero name (" + newHeroName + ") in details view", updateHeroNameInDetailView);
        it("shows " + newHeroName + " in Heroes list", function () {
            protractor_1.element(protractor_1.by.buttonText('Back')).click();
            var expectedText = targetHero.id + " " + newHeroName;
            expect(getHeroLiEltById(targetHero.id).getText()).toEqual(expectedText);
        });
    });
    function dashboardSelectTargetHero() {
        return __awaiter(this, void 0, void 0, function () {
            var targetHeroElt, page, hero;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        targetHeroElt = getPageElts().topHeroes.get(targetHeroDashboardIndex);
                        expect(targetHeroElt.getText()).toEqual(targetHero.name);
                        targetHeroElt.click();
                        page = getPageElts();
                        expect(page.heroDetail.isPresent()).toBeTruthy('shows hero detail');
                        return [4 /*yield*/, Hero.fromDetail(page.heroDetail)];
                    case 1:
                        hero = _a.sent();
                        expect(hero.id).toEqual(targetHero.id);
                        expect(hero.name).toEqual(targetHero.name);
                        return [2 /*return*/];
                }
            });
        });
    }
    function updateHeroNameInDetailView() {
        return __awaiter(this, void 0, void 0, function () {
            var page, hero;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Assumes that the current view is the hero details view.
                        addToHeroName(nameSuffix);
                        page = getPageElts();
                        return [4 /*yield*/, Hero.fromDetail(page.heroDetail)];
                    case 1:
                        hero = _a.sent();
                        expect(hero.id).toEqual(targetHero.id);
                        expect(hero.name).toEqual(newHeroName);
                        return [2 /*return*/];
                }
            });
        });
    }
});
function addToHeroName(text) {
    var input = protractor_1.element(protractor_1.by.css('input'));
    return input.sendKeys(text);
}
function expectHeading(hLevel, expectedText) {
    var hTag = "h" + hLevel;
    var hText = protractor_1.element(protractor_1.by.css(hTag)).getText();
    expect(hText).toEqual(expectedText, hTag);
}
;
function getHeroLiEltById(id) {
    var spanForId = protractor_1.element(protractor_1.by.cssContainingText('li span.badge', id.toString()));
    return spanForId.element(protractor_1.by.xpath('..'));
}
