"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableDefaultApi = exports.ObservableAuthApi = void 0;
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
//# sourceMappingURL=ObservableAPI.js.map