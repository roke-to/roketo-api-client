"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertUserDto = void 0;
var UpsertUserDto = (function () {
    function UpsertUserDto() {
    }
    UpsertUserDto.getAttributeTypeMap = function () {
        return UpsertUserDto.attributeTypeMap;
    };
    UpsertUserDto.discriminator = undefined;
    UpsertUserDto.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        }
    ];
    return UpsertUserDto;
}());
exports.UpsertUserDto = UpsertUserDto;
//# sourceMappingURL=UpsertUserDto.js.map