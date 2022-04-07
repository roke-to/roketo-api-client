"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDto = void 0;
var LoginDto = (function () {
    function LoginDto() {
    }
    LoginDto.getAttributeTypeMap = function () {
        return LoginDto.attributeTypeMap;
    };
    LoginDto.discriminator = undefined;
    LoginDto.attributeTypeMap = [
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": ""
        },
        {
            "name": "signature",
            "baseName": "signature",
            "type": "Array<number>",
            "format": ""
        }
    ];
    return LoginDto;
}());
exports.LoginDto = LoginDto;
//# sourceMappingURL=LoginDto.js.map