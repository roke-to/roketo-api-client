"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUsersApi = exports.ObjectDefaultApi = exports.ObjectAuthApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectAuthApi = (function () {
    function ObjectAuthApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }
    ObjectAuthApi.prototype.login = function (param, options) {
        return this.api.login(param.loginDto, options).toPromise();
    };
    return ObjectAuthApi;
}());
exports.ObjectAuthApi = ObjectAuthApi;
var ObservableAPI_2 = require("./ObservableAPI");
var ObjectDefaultApi = (function () {
    function ObjectDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    ObjectDefaultApi.prototype.getHello = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getHello(options).toPromise();
    };
    return ObjectDefaultApi;
}());
exports.ObjectDefaultApi = ObjectDefaultApi;
var ObservableAPI_3 = require("./ObservableAPI");
var ObjectUsersApi = (function () {
    function ObjectUsersApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }
    ObjectUsersApi.prototype.findOne = function (param, options) {
        return this.api.findOne(param.accountId, options).toPromise();
    };
    ObjectUsersApi.prototype.getAvatarUrl = function (param, options) {
        return this.api.getAvatarUrl(param.accountId, options).toPromise();
    };
    ObjectUsersApi.prototype.upsert = function (param, options) {
        return this.api.upsert(param.accountId, param.upsertUserDto, options).toPromise();
    };
    return ObjectUsersApi;
}());
exports.ObjectUsersApi = ObjectUsersApi;
//# sourceMappingURL=ObjectParamAPI.js.map