"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessToken = void 0;
var AccessToken = (function () {
    function AccessToken() {
    }
    AccessToken.getAttributeTypeMap = function () {
        return AccessToken.attributeTypeMap;
    };
    AccessToken.discriminator = undefined;
    AccessToken.attributeTypeMap = [
        {
            "name": "accessToken",
            "baseName": "accessToken",
            "type": "string",
            "format": ""
        }
    ];
    return AccessToken;
}());
exports.AccessToken = AccessToken;
//# sourceMappingURL=AccessToken.js.map