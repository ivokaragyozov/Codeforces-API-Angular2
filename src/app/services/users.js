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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
        this.baseUrl = "http://codeforces.com/api/user.rating";
    }
    UsersService.prototype.handleError = function (err) {
        console.log('An error occured', err);
        return Promise.reject(err.message || err);
    };
    UsersService.prototype.parseContests = function (data) {
        var contests = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var contest = data_1[_i];
            contests.push({
                place: contest.rank,
                contestId: contest.contestId,
                contestName: contest.contestName,
                ratingChange: contest.newRating - contest.oldRating
            });
        }
        return contests;
    };
    UsersService.prototype.getUserContests = function (handle) {
        var _this = this;
        var url = "https://cors-anywhere.herokuapp.com/" + this.baseUrl + '?handle=' + handle;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return _this.parseContests(JSON.parse(res._body).result); })
            .catch(function (err) { return _this.handleError(err); });
    };
    return UsersService;
}());
UsersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.js.map