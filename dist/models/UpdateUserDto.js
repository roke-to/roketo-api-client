"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
var UpdateUserDto = (function () {
    function UpdateUserDto() {
    }
    UpdateUserDto.getAttributeTypeMap = function () {
        return UpdateUserDto.attributeTypeMap;
    };
    UpdateUserDto.discriminator = undefined;
    UpdateUserDto.attributeTypeMap = [
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
    return UpdateUserDto;
}());
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=UpdateUserDto.js.map