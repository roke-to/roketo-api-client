"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
var Notification = (function () {
    function Notification() {
    }
    Notification.getAttributeTypeMap = function () {
        return Notification.attributeTypeMap;
    };
    Notification.discriminator = undefined;
    Notification.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
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
            "name": "streamId",
            "baseName": "streamId",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "isRead",
            "baseName": "isRead",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "NotificationTypeEnum",
            "format": ""
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "any",
            "format": ""
        }
    ];
    return Notification;
}());
exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map