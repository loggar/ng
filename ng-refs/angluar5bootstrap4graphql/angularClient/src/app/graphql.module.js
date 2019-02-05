"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
// Apollo
var apollo_angular_1 = require("apollo-angular");
var apollo_angular_link_http_1 = require("apollo-angular-link-http");
var apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
var GraphQLModule = /** @class */ (function () {
    function GraphQLModule(apollo, httpLink) {
        apollo.create({
            link: httpLink.create({ uri: "http://localhost:4000/graphql" }),
            cache: new apollo_cache_inmemory_1.InMemoryCache()
        });
    }
    GraphQLModule = __decorate([
        core_1.NgModule({
            exports: [http_1.HttpClientModule, apollo_angular_1.ApolloModule, apollo_angular_link_http_1.HttpLinkModule]
        })
    ], GraphQLModule);
    return GraphQLModule;
}());
exports.GraphQLModule = GraphQLModule;
