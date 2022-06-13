"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableUsersApi = exports.ObservableNotificationsApi = exports.ObservableDefaultApi = exports.ObservableAuthApi = void 0;
var rxjsStub_1 = require("../rxjsStub");
var rxjsStub_2 = require("../rxjsStub");
var AuthApi_1 = require("../apis/AuthApi");
var ObservableAuthApi = (function () {
    function ObservableAuthApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthApi_1.AuthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthApi_1.AuthApiResponseProcessor();
    }
    ObservableAuthApi.prototype.login = function (loginDto, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.login(loginDto, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_1 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_1(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_2 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_2(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.login(rsp); }));
        }));
    };
    return ObservableAuthApi;
}());
exports.ObservableAuthApi = ObservableAuthApi;
var DefaultApi_1 = require("../apis/DefaultApi");
var ObservableDefaultApi = (function () {
    function ObservableDefaultApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApi_1.DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApi_1.DefaultApiResponseProcessor();
    }
    ObservableDefaultApi.prototype.getHello = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getHello(_options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_3 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_3(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_4 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_4(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getHello(rsp); }));
        }));
    };
    return ObservableDefaultApi;
}());
exports.ObservableDefaultApi = ObservableDefaultApi;
var NotificationsApi_1 = require("../apis/NotificationsApi");
var ObservableNotificationsApi = (function () {
    function ObservableNotificationsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NotificationsApi_1.NotificationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NotificationsApi_1.NotificationsApiResponseProcessor();
    }
    ObservableNotificationsApi.prototype.findAll = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.findAll(_options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_5 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_5(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_6 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_6(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.findAll(rsp); }));
        }));
    };
    ObservableNotificationsApi.prototype.markAllRead = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.markAllRead(_options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_7 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_7(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_8 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_8(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.markAllRead(rsp); }));
        }));
    };
    return ObservableNotificationsApi;
}());
exports.ObservableNotificationsApi = ObservableNotificationsApi;
var UsersApi_1 = require("../apis/UsersApi");
var ObservableUsersApi = (function () {
    function ObservableUsersApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApi_1.UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApi_1.UsersApiResponseProcessor();
    }
    ObservableUsersApi.prototype.findOne = function (accountId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.findOne(accountId, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_9 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_9(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_10 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_10(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.findOne(rsp); }));
        }));
    };
    ObservableUsersApi.prototype.getAvatarUrl = function (accountId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAvatarUrl(accountId, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_11 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_11(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_12 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_12(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getAvatarUrl(rsp); }));
        }));
    };
    ObservableUsersApi.prototype.update = function (accountId, updateUserDto, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.update(accountId, updateUserDto, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_13 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_13(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_14 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_14(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.update(rsp); }));
        }));
    };
    ObservableUsersApi.prototype.verifyEmail = function (accountId, jwt, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.verifyEmail(accountId, jwt, _options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_15 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_15(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_16 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_16(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.verifyEmail(rsp); }));
        }));
    };
    return ObservableUsersApi;
}());
exports.ObservableUsersApi = ObservableUsersApi;
//# sourceMappingURL=ObservableAPI.js.map