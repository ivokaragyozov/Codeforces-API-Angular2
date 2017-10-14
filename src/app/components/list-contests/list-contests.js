"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var users_1 = require("../../services/users");
var ListContestsComponent = (function () {
    function ListContestsComponent(usersService, activatedRoute, location) {
        this.usersService = usersService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.handle = "";
        this.contests = [];
    }
    ListContestsComponent.prototype.goBack = function () {
        this.location.back();
    };
    ListContestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.handle = params['handle'];
            _this.usersService.getUserContests(_this.handle)
                .then(function (res) { return _this.contests = res.sort(function (c1, c2) {
                if (c1.place > c2.place) {
                    return 1;
                }
                else if (c2.place > c1.place) {
                    return -1;
                }
                return 0;
            }); });
        });
    };
    return ListContestsComponent;
}());
ListContestsComponent = __decorate([
    core_1.Component({
        selector: 'list-contests',
        templateUrl: './list-contests.html',
        styleUrls: [
            './list-contests.css'
        ]
    }),
    __metadata("design:paramtypes", [users_1.UsersService, router_1.ActivatedRoute, common_1.Location])
], ListContestsComponent);
exports.ListContestsComponent = ListContestsComponent;
//# sourceMappingURL=list-contests.js.map