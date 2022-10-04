"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchivedStream = void 0;
var ArchivedStream = (function () {
    function ArchivedStream() {
    }
    ArchivedStream.getAttributeTypeMap = function () {
        return ArchivedStream.attributeTypeMap;
    };
    ArchivedStream.discriminator = undefined;
    ArchivedStream.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "streamId",
            "baseName": "streamId",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string",
            "format": ""
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "finishedAt",
            "baseName": "finishedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "ArchivedStreamPayload",
            "format": ""
        }
    ];
    return ArchivedStream;
}());
exports.ArchivedStream = ArchivedStream;
//# sourceMappingURL=ArchivedStream.js.map