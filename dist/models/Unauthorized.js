"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unauthorized = void 0;
var Unauthorized = (function () {
    function Unauthorized() {
    }
    Unauthorized.getAttributeTypeMap = function () {
        return Unauthorized.attributeTypeMap;
    };
    Unauthorized.discriminator = undefined;
    Unauthorized.attributeTypeMap = [
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number",
            "format": ""
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        }
    ];
    return Unauthorized;
}());
exports.Unauthorized = Unauthorized;
//# sourceMappingURL=Unauthorized.js.map