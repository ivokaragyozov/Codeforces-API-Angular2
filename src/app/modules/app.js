"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app-routing");
var app_1 = require("../components/app/app");
var search_user_1 = require("../components/search-user/search-user");
var list_contests_1 = require("../components/list-contests/list-contests");
var users_1 = require("../services/users");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_1.AppRoutingModule,
            http_1.HttpModule
        ],
        declarations: [
            app_1.AppComponent,
            search_user_1.SearchUserComponent,
            list_contests_1.ListContestsComponent
        ],
        bootstrap: [
            app_1.AppComponent
        ],
        providers: [
            users_1.UsersService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.js.map