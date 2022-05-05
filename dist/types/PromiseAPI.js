"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseUsersApi = exports.PromiseNotificationsApi = exports.PromiseDefaultApi = exports.PromiseAuthApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseAuthApi = (function () {
    function PromiseAuthApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }
    PromiseAuthApi.prototype.login = function (loginDto, _options) {
        var result = this.api.login(loginDto, _options);
        return result.toPromise();
    };
    return PromiseAuthApi;
}());
exports.PromiseAuthApi = PromiseAuthApi;
var ObservableAPI_2 = require("./ObservableAPI");
var PromiseDefaultApi = (function () {
    function PromiseDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    PromiseDefaultApi.prototype.getHello = function (_options) {
        var result = this.api.getHello(_options);
        return result.toPromise();
    };
    return PromiseDefaultApi;
}());
exports.PromiseDefaultApi = PromiseDefaultApi;
var ObservableAPI_3 = require("./ObservableAPI");
var PromiseNotificationsApi = (function () {
    function PromiseNotificationsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableNotificationsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseNotificationsApi.prototype.findAll = function (_options) {
        var result = this.api.findAll(_options);
        return result.toPromise();
    };
    PromiseNotificationsApi.prototype.markRead = function (id, readNotificationDto, _options) {
        var result = this.api.markRead(id, readNotificationDto, _options);
        return result.toPromise();
    };
    return PromiseNotificationsApi;
}());
exports.PromiseNotificationsApi = PromiseNotificationsApi;
var ObservableAPI_4 = require("./ObservableAPI");
var PromiseUsersApi = (function () {
    function PromiseUsersApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }
    PromiseUsersApi.prototype.findOne = function (accountId, _options) {
        var result = this.api.findOne(accountId, _options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.getAvatarUrl = function (accountId, _options) {
        var result = this.api.getAvatarUrl(accountId, _options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.update = function (accountId, updateUserDto, _options) {
        var result = this.api.update(accountId, updateUserDto, _options);
        return result.toPromise();
    };
    return PromiseUsersApi;
}());
exports.PromiseUsersApi = PromiseUsersApi;
//# sourceMappingURL=PromiseAPI.js.map