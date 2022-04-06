"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenDto = void 0;
var AccessTokenDto = (function () {
    function AccessTokenDto() {
    }
    AccessTokenDto.getAttributeTypeMap = function () {
        return AccessTokenDto.attributeTypeMap;
    };
    AccessTokenDto.discriminator = undefined;
    AccessTokenDto.attributeTypeMap = [
        {
            "name": "accessToken",
            "baseName": "accessToken",
            "type": "string",
            "format": ""
        }
    ];
    return AccessTokenDto;
}());
exports.AccessTokenDto = AccessTokenDto;
//# sourceMappingURL=AccessTokenDto.js.map