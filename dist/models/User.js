"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = (function () {
    function User() {
    }
    User.getAttributeTypeMap = function () {
        return User.attributeTypeMap;
    };
    User.discriminator = undefined;
    User.attributeTypeMap = [
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string",
            "format": ""
        },
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
        },
        {
            "name": "isEmailVerified",
            "baseName": "isEmailVerified",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "verificationEmailSentAt",
            "baseName": "verificationEmailSentAt",
            "type": "Date",
            "format": "date-time"
        }
    ];
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map