"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchivedStreamPayload = void 0;
var ArchivedStreamPayload = (function () {
    function ArchivedStreamPayload() {
    }
    ArchivedStreamPayload.getAttributeTypeMap = function () {
        return ArchivedStreamPayload.attributeTypeMap;
    };
    ArchivedStreamPayload.discriminator = undefined;
    ArchivedStreamPayload.attributeTypeMap = [
        {
            "name": "stream",
            "baseName": "stream",
            "type": "any",
            "format": ""
        }
    ];
    return ArchivedStreamPayload;
}());
exports.ArchivedStreamPayload = ArchivedStreamPayload;
//# sourceMappingURL=ArchivedStreamPayload.js.map