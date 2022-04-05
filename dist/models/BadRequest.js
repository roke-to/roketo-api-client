"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequest = void 0;
var BadRequest = (function () {
    function BadRequest() {
    }
    BadRequest.getAttributeTypeMap = function () {
        return BadRequest.attributeTypeMap;
    };
    BadRequest.discriminator = undefined;
    BadRequest.attributeTypeMap = [
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        }
    ];
    return BadRequest;
}());
exports.BadRequest = BadRequest;
//# sourceMappingURL=BadRequest.js.map